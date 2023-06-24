import {afterEach, describe, expect, it, vi} from 'vitest'
import {getTypescriptAlias} from '../get-typescript-alias'
import {parseWorkspacePath} from '../parse-workspace-path'
import {join} from 'node:path'

vi.mock('../parse-workspace-path')

describe('get-typescript-alias', () => {
  afterEach(() => {
    vi.mocked(parseWorkspacePath).mockRestore()
  })
  const setup = () => {
    vi.mocked(parseWorkspacePath).mockImplementation((_, path) => path as any)

    return {}
  }
  it('should get typescript alias', async () => {
    setup()
    const alias = await getTypescriptAlias(
      [join(__dirname, 'packages/*'), join(__dirname, 'apps/*')],
      {'@/*': ['src/*']},
    )

    expect(alias).toEqual([
      {
        alias: [
          ['@/*', 'src/'],
          ['src/*', 'src/'],
        ],
        path: join(__dirname, 'apps', 'john'),
      },
      {
        alias: [
          ['@/*', 'src/'],
          ['components/*', 'components/'],
        ],
        path: join(__dirname, 'packages', 'foo'),
      },
      {
        alias: [
          ['@/*', 'src/'],
          ['components/*', 'components/'],
        ],
        path: join(__dirname, 'packages', 'bar'),
      },
    ])

    expect(parseWorkspacePath).toHaveBeenCalledWith('', join(__dirname, 'packages', 'foo'))
    expect(parseWorkspacePath).toHaveBeenCalledWith('', join(__dirname, 'packages', 'bar'))
    expect(parseWorkspacePath).toHaveBeenCalledWith('', join(__dirname, 'apps', 'john'))
    expect(parseWorkspacePath).toHaveBeenCalledWith('', join('src/*'))
    expect(parseWorkspacePath).toHaveBeenCalledWith('', join('components/*'))
  })
})
