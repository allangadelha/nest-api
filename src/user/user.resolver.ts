import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateuserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
    constructor(
        private userService: UserService
    ){}

    @Query(() => [User])
    async users(): Promise<User[]>{
        const users = await this.userService.findAllUsers();
        return users;
    }

    @Mutation(() => User)
    async createUser(
        @Args('data') data: CreateuserInput
    ): Promise<User>{
        const user = await this.userService.createUser(data);
        return user;
    }
}
