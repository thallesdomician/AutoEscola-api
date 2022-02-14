import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Process } from 'src/processes/entities/process.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Procedure extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: 'Procedure Identifier uuid' })
  @Field(() => String, { description: 'Procedure Identifier uuid' })
  id: string;

  @Column({ comment: 'Name of Procedure' })
  @Field(() => String, { description: 'Name of Procedure' })
  name: string;

  @Column('integer', {
    comment: 'Minimum repetitions of Procedure on Process',
    default: 1,
  })
  @Field(() => Int, {
    description: 'Minimum repetitions of Procedure on Process',
    defaultValue: 1,
  })
  quantity: number;

  @Column('boolean', {
    comment: 'Procedure is active to Process?',
    default: true,
  })
  @Field(() => Boolean, {
    description: 'Procedure is active to Process?',
    defaultValue: 1,
  })
  isActive: boolean;

  @ManyToOne(() => Process, (process) => process.procedures)
  @JoinColumn()
  @Field(() => Process, {
    description: 'Procedures of Procedure',
  })
  process: Process;
}
