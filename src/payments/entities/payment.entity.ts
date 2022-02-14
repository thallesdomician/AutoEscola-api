import { ObjectType, Field, Int } from '@nestjs/graphql';
import { StudentProcess } from 'src/student-processes/entities/student-process.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn('uuid', { comment: 'Payment Identifier uuid' })
  @Field(() => String, { description: 'Payment Identifier uuid' })
  id: string;

  @ManyToOne(() => StudentProcess, (studentProcess) => studentProcess.payments)
  @JoinColumn()
  @Field(() => StudentProcess, {
    description: 'StudentProcess of Payment',
  })
  studentProcess: StudentProcess;

  @Column('decimal', {
    precision: 5,
    scale: 2,
    comment: 'Value of Process Paid by Studend',
  })
  @Field(() => Number, { description: 'Value of Process Paid by Studend' })
  value: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  @Field(() => Date, { description: 'Value of Process Paid by Studend' })
  created_at: Date;
}
