import { HttpException, HttpStatus } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-express';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => User, { nullable: true })
  async login(
    @Args('username', { nullable: false }) username: string,
    @Args('password', { nullable: false }) password: string,
  ) {
    const user = this.authService.validateUserLogin(username, password);
    if (!user) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return user;
  }
}
