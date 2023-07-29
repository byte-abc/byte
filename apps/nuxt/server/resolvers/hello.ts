import {QueryResolvers} from '#graphql/resolver'

export const hello: QueryResolvers['hello'] = () => {
  return 'hello'
}
