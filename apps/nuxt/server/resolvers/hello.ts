import {extendType, stringArg} from 'nexus'
// import {User} from 'nexus-prisma'
import {prisma} from '../data/prisma'

export const helloQuery = extendType({
  definition(t) {
    t.string('hello', {
      args: {name: stringArg()},
      resolve: async (parent, {name}) => {
        const count = await prisma.user.count()
        return `Hello ${name || 'World'} ${count}!`
      },
    })
  },
  type: 'Query',
})
