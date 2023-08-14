import 'reflect-metadata'
import {ApolloServer} from '@apollo/server'
import {startServerAndCreateH3Handler} from '@as-integrations/h3'
import {createSchema} from '../schema'

const schema = await createSchema()

export default startServerAndCreateH3Handler(new ApolloServer({schema}), {
  // Optional: Specify context
  context: ({event: {context}}) => {
    return Promise.resolve({params: context.params, sessions: context.sessions})
  },
})
