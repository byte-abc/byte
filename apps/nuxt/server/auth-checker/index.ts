import {AuthChecker} from 'type-graphql'
import {Context} from '../context'
import {verifyUser} from '../resolvers/service/jwt'

const toString = (value: string | string[]) => {
  return Array.isArray(value) ? value.join('') : value
}

export const authChecker: AuthChecker<Context> = async ({context}) => {
  const {req} = context

  const {Authorization} = req.headers as any

  if (!Authorization) {
    return false
  }

  const [, token] = toString(Authorization).split(' ')

  if (!token) {
    return false
  }

  // eslint-disable-next-line functional/no-try-statements
  try {
    req.user = await verifyUser(token)

    return true
  } catch {
    return false
  }
}
