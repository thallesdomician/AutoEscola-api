import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SchoolsService } from './schools.service';
import { School } from './entities/school.entity';
import { CreateSchoolInput } from './dto/create-school.input';
import { UpdateSchoolInput } from './dto/update-school.input';

@Resolver(() => School)
export class SchoolsResolver {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Mutation(() => School)
  createSchool(@Args('createSchoolInput') createSchoolInput: CreateSchoolInput) {
    return this.schoolsService.create(createSchoolInput);
  }

  @Query(() => [School], { name: 'schools' })
  findAll() {
    return this.schoolsService.findAll();
  }

  @Query(() => School, { name: 'school' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.schoolsService.findOne(id);
  }

  @Mutation(() => School)
  updateSchool(@Args('updateSchoolInput') updateSchoolInput: UpdateSchoolInput) {
    return this.schoolsService.update(updateSchoolInput.id, updateSchoolInput);
  }

  @Mutation(() => School)
  removeSchool(@Args('id', { type: () => Int }) id: number) {
    return this.schoolsService.remove(id);
  }
}
