import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesModule } from './addresses/addresses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { connectionOptionsAsync } from './config/typeorm.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SchoolsModule } from './schools/schools.module';
import { ProcessesModule } from './processes/processes.module';
import { CategoriesModule } from './categories/categories.module';
import { ProceduresModule } from './procedures/procedures.module';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { StudentProcessesModule } from './student-processes/student-processes.module';
import { StudentProcedureProcessesModule } from './student-procedure-processes/student-procedure-processes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(connectionOptionsAsync),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    SchoolsModule,
    AddressesModule,
    ProcessesModule,
    CategoriesModule,
    ProceduresModule,
    StudentsModule,
    UsersModule,
    PaymentsModule,
    StudentProcessesModule,
    StudentProcedureProcessesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
