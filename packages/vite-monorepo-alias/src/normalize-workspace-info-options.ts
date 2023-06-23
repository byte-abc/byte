import {join} from 'node:path'

export interface CreateWorkspaceInfoOptions {
  root?: string
  workspaces: string[]
}
export interface NormalizedCreateWorkspaceInfoOptions {
  workspaces: string[]
}

export const normalizeWorkspaceInfoOptions = (
  options: CreateWorkspaceInfoOptions,
): NormalizedCreateWorkspaceInfoOptions => {
  const {workspaces, root = process.cwd()} = options
  return {
    workspaces: workspaces.map((info) => {
      return join(root, info)
    }),
  }
}
