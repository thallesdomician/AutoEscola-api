import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Address } from 'src/addresses/entities/address.entity';
import { School } from 'src/schools/entities/school.entity';
import { Process } from 'src/processes/entities/process.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';
import { User } from 'src/users/entities/user.entity';
import { Student } from 'src/students/entities/student.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { StudentProcess } from 'src/student-processes/entities/student-process.entity';

const PROD_ENV = 'production';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: configService.get('DATABASE_HOST'),
      port: 5432,
      username: configService.get('DATABASE_USER'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_DATABASE'),
      entities: [
        Address,
        School,
        Category,
        Process,
        Procedure,
        User,
        StudentProcess,
        Student,
        Payment,
      ],
      logging: true,
      logger: process.env.NODE_ENV === PROD_ENV ? 'file' : 'debug',
      synchronize: true,
    };
  }
}

export const connectionOptionsAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService],
};
