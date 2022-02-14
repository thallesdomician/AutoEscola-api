import { ObjectType, Field } from '@nestjs/graphql';
import { Address } from 'src/addresses/entities/address.entity';
import { StudentProcess } from 'src/student-processes/entities/student-process.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Student {
  @Column({ comment: 'RG of Student' })
  @Field(() => String, { description: 'RG of Student' })
  rg: string;

  @Column({ comment: 'CNH of Student', nullable: true })
  @Field(() => String, { description: 'CNH of Student' })
  cnh: string;

  @Column('date', { comment: 'Birthdate od student' })
  @Field(() => Date, { description: 'Birthdate od student' })
  birthdate: Date;

  @OneToOne(() => User, { cascade: false, primary: true })
  @JoinColumn()
  @Field(() => User, { description: 'User responsible to login' })
  user: User;

  @OneToMany(() => StudentProcess, (studentProcess) => studentProcess.student)
  @Field(() => [StudentProcess], { description: 'List of StudentProcesses' })
  studentProcesses: StudentProcess[];

  @OneToOne(() => Address, { cascade: true })
  @JoinColumn()
  @Field(() => String, { description: 'Foreign Key Address' })
  address: Address;
}
