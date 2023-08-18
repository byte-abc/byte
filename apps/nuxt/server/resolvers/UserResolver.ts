import {User} from '@generated/type-graphql'
import {Arg, Mutation, Query, Resolver} from 'type-graphql'
import {prisma} from '../data/prisma'
import {hashPassword} from './service/password'

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async signInWithEmailAndPassword(
    @Arg('email', () => String, {nullable: false}) email: string,
    @Arg('password', () => String, {nullable: false}) password: string,
  ) {
    return prisma.user.create({
      data: {
        identifier: email,
        identifierProvider: 'email',
        password: await hashPassword(password),
      },
    })
  }

  @Query(() => User)
  async getUserById(@Arg('id', () => String, {nullable: false}) id: number) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    })
  }
}
