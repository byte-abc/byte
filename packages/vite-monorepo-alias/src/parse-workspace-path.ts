import {join} from 'node:path'

export const parseWorkspacePath = (root: string, path: string) => {
  return RegExp(`^${join(root, path.replace(/\/*$/u, '/'))}`, 'u')
}
