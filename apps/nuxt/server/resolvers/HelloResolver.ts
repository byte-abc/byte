import {Query, Resolver} from 'type-graphql'

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!'
  }
}
