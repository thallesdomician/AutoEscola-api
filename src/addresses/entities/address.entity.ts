import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  BaseEntity,
  // BaseEntity
} from 'typeorm';

@Entity()
@ObjectType()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: 'Address Identifier uuid' })
  @Field(() => String, { description: 'Address Identifier uuid' })
  id: string;

  @Column({ comment: 'Street, Avenue, Square place name' })
  @Field(() => String, { description: 'Street, Avenue, Square place name' })
  place: string;

  @Column({ comment: 'Place number' })
  @Field(() => String, { description: 'Place number' })
  number: string;

  @Column({ comment: 'Place complement' })
  @Field(() => String, { description: 'Place complement' })
  complement: string;

  @Column({ comment: 'ZIP Code' })
  @Field(() => String, { description: 'ZIP Code' })
  cep: string;

  @Column({ comment: 'State UF', length: 2 })
  @Field(() => String, { description: 'State UF' })
  uf: string;
}
