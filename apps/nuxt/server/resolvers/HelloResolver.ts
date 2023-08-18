import {Arg, Query, Resolver} from 'type-graphql'

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(@Arg('name', () => String, {nullable: true}) name?: string) {
    return `Hello World!${name}`
  }
}
