import {WorkspaceInfo} from './types'
import {getTypescriptAlias} from './get-typescript-alias'
import {
  CreateWorkspaceInfoOptions,
  normalizeWorkspaceInfoOptions,
} from './normalize-workspace-info-options'

export const createWorkspaceInfo = (
  options: CreateWorkspaceInfoOptions,
): Promise<WorkspaceInfo[]> => {
  const normalizedOptions = normalizeWorkspaceInfoOptions(options)

  return getTypescriptAlias(normalizedOptions.workspaces)
}
