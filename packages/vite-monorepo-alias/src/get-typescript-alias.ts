import {glob} from 'glob'
import {readFileSync} from 'node:fs'
import {join} from 'node:path'
import {WorkspaceInfo} from 'src/types'
import {readConfigFile} from 'typescript'
import {parseWorkspacePath} from './parse-workspace-path'
const WildCard = /\/\*$/u

/**
 * todo finding exact alias is yet
 * @param workspacePath
 */
export const getTypescriptAlias = async (workspacePath: string[]): Promise<WorkspaceInfo[]> => {
  const paths = await glob(workspacePath)
  return paths.map((path) => {
    const {config} = readConfigFile(join(path, 'tsconfig.json'), (path) =>
      readFileSync(path).toString(),
    )
    const configPaths: Record<string, string[]> = config.compilerOptions?.paths ?? {}

    return {
      alias: Object.entries(configPaths).map(([key, value]) => {
        return [parseWorkspacePath('', key), value[0].replace(WildCard, '/')]
      }),
      path: parseWorkspacePath('', path),
    }
  })
}
