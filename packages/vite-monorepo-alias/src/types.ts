export interface WorkspaceInfo {
  alias: [RegExp, string][]
  path: RegExp
}

export interface Paths {
  [key: string]: string[]
}
