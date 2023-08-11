import {ApolloServer} from '@apollo/server'
import {startServerAndCreateH3Handler} from '@as-integrations/h3'
import {makeSchema} from 'nexus'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import * as resolvers from '../resolvers'

const __dirname = dirname(fileURLToPath(import.meta.url))

const schema = makeSchema({
  outputs: {
    schema: resolve(__dirname, '../schema.graphql'),
    typegen: resolve(__dirname, '../typings.ts'),
  },
  types: resolvers,
})

const apollo = new ApolloServer({schema})

export default startServerAndCreateH3Handler(apollo, {
  // Optional: Specify context
  context: ({event: {context}}) => {
    return Promise.resolve({params: context.params, sessions: context.sessions})
  },
})
