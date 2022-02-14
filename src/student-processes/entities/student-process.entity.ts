import { ObjectType, Field } from '@nestjs/graphql';
import { Payment } from 'src/payments/entities/payment.entity';
import { Process } from 'src/processes/entities/process.entity';
import { Student } from 'src/students/entities/student.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class StudentProcess {
  @PrimaryGeneratedColumn('uuid', { comment: 'StudentProcess Identifier uuid' })
  @Field(() => String, { description: 'StudentProcess Identifier uuid' })
  id: string;

  @ManyToOne(() => Process, (process) => process.studentProcesses)
  @JoinColumn()
  @Field(() => Process, {
    description: 'Process of StudentProcess',
  })
  process: Process;

  @OneToMany(() => Payment, (payment) => payment.studentProcess)
  @Field(() => [Payment], { description: 'List of StudentProcesses' })
  payments: Payment[];

  @ManyToOne(() => Student, (student) => student.studentProcesses)
  @JoinColumn()
  @Field(() => Student, {
    description: 'Student of StudentProcess',
  })
  student: Student;
}
