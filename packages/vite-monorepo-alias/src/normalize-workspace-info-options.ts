import {join} from 'node:path'
import {Paths} from './types'

export interface CreateWorkspaceInfoOptions {
  defaultPaths?: Paths
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
