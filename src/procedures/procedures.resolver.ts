import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProceduresService } from './procedures.service';
import { Procedure } from './entities/procedure.entity';
import { CreateProcedureInput } from './dto/create-procedure.input';
import { UpdateProcedureInput } from './dto/update-procedure.input';

@Resolver(() => Procedure)
export class ProceduresResolver {
  constructor(private readonly proceduresService: ProceduresService) {}

  @Mutation(() => Procedure)
  createProcedure(@Args('createProcedureInput') createProcedureInput: CreateProcedureInput) {
    return this.proceduresService.create(createProcedureInput);
  }

  @Query(() => [Procedure], { name: 'procedures' })
  findAll() {
    return this.proceduresService.findAll();
  }

  @Query(() => Procedure, { name: 'procedure' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.proceduresService.findOne(id);
  }

  @Mutation(() => Procedure)
  updateProcedure(@Args('updateProcedureInput') updateProcedureInput: UpdateProcedureInput) {
    return this.proceduresService.update(updateProcedureInput.id, updateProcedureInput);
  }

  @Mutation(() => Procedure)
  removeProcedure(@Args('id', { type: () => Int }) id: number) {
    return this.proceduresService.remove(id);
  }
}
