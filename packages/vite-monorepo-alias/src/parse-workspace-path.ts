import {join} from 'node:path'

export const parseWorkspacePath = (root: string, path: string) => {
  const _path = path.replace(/\/\*$/u, '/')
  const __path = _path.endsWith('/') ? _path : `${_path}/`
  return RegExp(`^${join(root, __path)}`, 'u')
}
