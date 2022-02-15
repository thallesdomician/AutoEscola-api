import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: 'User Identifier uuid' })
  @Field(() => ID, { description: 'User Identifier uuid', nullable: true })
  id: string;

  @Column({ unique: true, comment: 'unique username key to login' })
  @Field(() => String, { description: 'unique username key to login' })
  username: string;

  @Column({ comment: 'Encrypted password' })
  @Field(() => String, { description: 'Encrypted password', nullable: true })
  password: string;

  @Generated('uuid')
  @Column({ comment: 'salt key to login' })
  @Field(() => String, { description: 'salt key to login', nullable: true })
  salt: string;

  @Column('boolean', { comment: 'user login active', default: true })
  @Field(() => Boolean, { description: 'user login active', nullable: true })
  isActive: boolean;

  @Column('date', { comment: 'Date of Expiration Login', nullable: true })
  @Field(() => String, {
    description: 'Date of Expiration Login',
    nullable: true,
  })
  expiration: string;
}
