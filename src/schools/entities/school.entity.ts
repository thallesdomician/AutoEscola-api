import { ObjectType, Field } from '@nestjs/graphql';
import { Address } from 'src/addresses/entities/address.entity';
import { Process } from 'src/processes/entities/process.entity';
import {
  BaseEntity,
  // BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class School extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: 'School Identifier uuid' })
  @Field(() => String, { description: 'School Identifier uuid' })
  id: string;

  @Column({ comment: 'Name of School' })
  @Field(() => String, { description: 'Name of School' })
  name: string;

  @Column({ comment: 'CNPJ identifier' })
  @Field(() => String, { description: 'CNPJ identifier' })
  cnpj: string;

  @OneToOne(() => Address, { cascade: true })
  @JoinColumn()
  @Field(() => Address, { description: 'Foreign Key Address' })
  address: Address;

  @OneToMany(() => Process, (process) => process.school)
  @Field(() => [Process], { description: 'List of processes' })
  processes: Process[];
}
