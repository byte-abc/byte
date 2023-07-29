import {Resolvers} from '#graphql/resolver'
import {schema} from '#graphql/schema'
import {hello} from '../resolvers/hello'
import {ApolloServer} from '@apollo/server'
import {startServerAndCreateH3Handler} from '@as-integrations/h3'

const resolvers: Resolvers = {
  Query: {
    hello,
  },
}

const apollo = new ApolloServer({resolvers, typeDefs: schema})

export default startServerAndCreateH3Handler(apollo, {
  // Optional: Specify context
  context: ({event: {context}}) => {
    return Promise.resolve({params: context.params, sessions: context.sessions})
  },
})
