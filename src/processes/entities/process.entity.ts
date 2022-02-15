import { ObjectType, Field } from '@nestjs/graphql';
import { Category } from 'src/categories/entities/category.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';
import { School } from 'src/schools/entities/school.entity';
import { StudentProcess } from 'src/student-processes/entities/student-process.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Process extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: 'Process Identifier uuid' })
  @Field(() => String, { description: 'Process Identifier uuid' })
  id: string;

  @Column({ comment: 'Name of Process' })
  @Field(() => String, { description: 'Name of Process' })
  name: string;

  @Column('decimal', { precision: 5, scale: 2, comment: 'Value of Process' })
  @Field(() => Number, { description: 'Value of Process' })
  value: number;

  @OneToOne(() => Category)
  @JoinColumn()
  @Field(() => Category, { description: 'Foreign Key Category' })
  category: Category;

  @Column('boolean', {
    default: true,
    comment: 'Enable Process to new Students',
  })
  @Field(() => Boolean, {
    description: 'Enable Process to new Students',
  })
  isActive: boolean;

  @ManyToOne(() => School, (school) => school.processes)
  @Field(() => School, { description: 'School' })
  school: School;

  @OneToMany(() => Procedure, (procedure) => procedure.process)
  @Field(() => [Procedure], { description: 'List of procedures' })
  procedures: Procedure[];

  @OneToMany(() => StudentProcess, (studentProcess) => studentProcess.process)
  @Field(() => [StudentProcess], { description: 'List of StudentProcess' })
  studentProcesses: StudentProcess[];
}
