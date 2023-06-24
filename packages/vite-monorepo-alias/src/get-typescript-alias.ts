import {glob} from 'glob'
import {join} from 'node:path'
import {Paths, WorkspaceInfo} from './types'
import {parseConfigFileTextToJson, sys} from 'typescript'
import {parseWorkspacePath} from './parse-workspace-path'

const WildCard = /\/\*$/u

/**
 * todo finding exact alias is yet
 * @param workspacePath
 * @param paths
 */
export const getTypescriptAlias = async (
  workspacePath: string[],
  paths?: Paths,
): Promise<WorkspaceInfo[]> => {
  const eachPaths = await glob(workspacePath)
  return eachPaths.map((path) => {
    const configPath = join(path, 'tsconfig.json')
    const file = sys.readFile(join(path, 'tsconfig.json')) ?? '{}'
    const {config} = parseConfigFileTextToJson(configPath, file)
    const configPaths: Record<string, string[]> = config.compilerOptions?.paths ?? {}
    const mergedPaths = {...paths, ...configPaths}

    return {
      alias: Object.entries(mergedPaths).map(([key, value]) => {
        return [parseWorkspacePath('', key), value[0].replace(WildCard, '/')]
      }),
      path: parseWorkspacePath('', path),
    }
  })
}
