import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Process } from 'src/processes/entities/process.entity';
import { StudentProcess } from 'src/student-processes/entities/student-process.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class StudentProcedureProcess {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'StudentProcedureProcess Identifier uuid',
  })
  @Field(() => String, {
    description: 'StudentProcedureProcess Identifier uuid',
  })
  id: string;

  @ManyToOne(
    () => StudentProcess,
    (studentProcesses) => studentProcesses.studentProcedureProcesses,
  )
  @JoinColumn()
  @Field(() => StudentProcess, {
    description: 'StudentProcess of StudentProcedureProcess',
  })
  studentProcess: StudentProcess;

  @OneToOne(() => Process)
  @JoinColumn()
  @Field(() => Process, { description: 'Foreign Key Process' })
  process: Process;

  @Column('integer', { comment: 'Quantity relized of process' })
  @Field(() => Int, { description: 'Quantity relized of process' })
  quantity: number;
}
