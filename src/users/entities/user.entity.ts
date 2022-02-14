import { ObjectType, Field } from '@nestjs/graphql';
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
  @Field(() => String, { description: 'User Identifier uuid' })
  id: string;

  @Column({ unique: true, comment: 'unique username key to login' })
  @Field(() => String, { description: 'unique username key to login' })
  username: string;

  @Column({ comment: 'Encrypted password' })
  @Field(() => String, { description: 'Encrypted password' })
  password: string;

  @Generated('uuid')
  @Column({ comment: 'slug key to login' })
  @Field(() => String, { description: 'slug key to login' })
  slug: string;

  @Column('boolean', { comment: 'user login active', default: true })
  @Field(() => Boolean, { description: 'slug key to login' })
  isActive: boolean;

  @Column('date', { comment: 'Date of Expiration Login' })
  @Field(() => String, { description: 'Date of Expiration Login' })
  expiration: string;
}
