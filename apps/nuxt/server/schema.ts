import 'reflect-metadata'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import {buildSchema} from 'type-graphql'
import {HelloResolver} from './resolvers'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const createSchema = (root = '') => {
  return buildSchema({
    // ./.nuxt/
    emitSchemaFile: resolve(__dirname, '../', root, 'schema.graphql'),
    resolvers: [HelloResolver],
  })
}
// for a graphql:generate script
if (process.env.NODE_ENV === 'generate') {
  createSchema('.nuxt').then(() => 'created schema')
}
