import {glob} from 'glob'
import {join} from 'node:path'
import {Paths, WorkspaceInfo} from './types'
import {parseConfigFileTextToJson, sys} from 'typescript'
import {parseWorkspacePath} from './parse-workspace-path'
import deepmerge from 'deepmerge'

const WILD_CARD = /\/\*$/u
const SELF_PATH = /^\./u

const getOneExtend = (path: string, extendsPath?: string): any | undefined => {
  if (!extendsPath) {
    return
  }
  const configPath = join(path, extendsPath)
  const file = sys.readFile(join(path, extendsPath)) ?? '{}'
  const {config} = parseConfigFileTextToJson(configPath, file)
  return config
}

const getExtends = (path: string, extendsPath?: string | string[]): any[] => {
  if (!extendsPath) {
    return []
  }

  const extendsPaths = typeof extendsPath === 'string' ? [extendsPath] : extendsPath

  return extendsPaths.map((extendsPath) => {
    return getOneExtend(path, extendsPath)
  })
}
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
    const {config: _config} = parseConfigFileTextToJson(configPath, file)
    const extendsConfig = getExtends(path, _config.extends)
    const config: any = deepmerge.all([...extendsConfig, _config])
    const configPaths: Record<string, string[]> = config.compilerOptions?.paths ?? {}
    const mergedPaths = {...paths, ...configPaths}

    return {
      alias: Object.entries(mergedPaths).map(([key, value]) => {
        return [
          parseWorkspacePath('', key),
          value[0].replace(WILD_CARD, '/').replace(SELF_PATH, ''),
        ]
      }),
      path: parseWorkspacePath('', path),
    }
  })
}
