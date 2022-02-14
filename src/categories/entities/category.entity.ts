import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: 'Category Identifier uuid' })
  @Field(() => String, { description: 'Category Identifier uuid' })
  id: string;

  @Column({ comment: 'Name of Category' })
  @Field(() => String, { description: 'Name of Category' })
  name: string;

  @Column('boolean', {
    default: true,
    comment: 'Enable of Categories to new Processes',
  })
  @Field(() => Boolean, {
    description: 'Enable of Categories to new Processes',
  })
  isActive: boolean;
}
