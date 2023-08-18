import 'reflect-metadata'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import {buildSchema} from 'type-graphql'
import {HelloResolver, UserResolver} from './resolvers'
import {resolvers} from '@generated/type-graphql'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const createSchema = (root = '') => {
  return buildSchema({
    // root 가 '' 이며 nuxt 시스템 내에서 호출 될때 ./.nuxt/schema.graphql 에 파일이 생성 됩니다
    // graphql:generate script 과 같이 독립 실행일 경우 __dirname 는 ./server 입니다
    emitSchemaFile: resolve(__dirname, '../', root, 'schema.graphql'),
    resolvers: [...resolvers, HelloResolver, UserResolver],
  })
}
// for a graphql:generate script
if (process.env.NODE_ENV === 'generate') {
  createSchema('.nuxt').then(() => 'created schema')
}
