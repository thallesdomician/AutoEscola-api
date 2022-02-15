import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy, AuthResolver],
})
export class AuthModule {}
