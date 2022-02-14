import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProcessesService } from './processes.service';
import { Process } from './entities/process.entity';
import { CreateProcessInput } from './dto/create-process.input';
import { UpdateProcessInput } from './dto/update-process.input';

@Resolver(() => Process)
export class ProcessesResolver {
  constructor(private readonly processesService: ProcessesService) {}

  @Mutation(() => Process)
  createProcess(@Args('createProcessInput') createProcessInput: CreateProcessInput) {
    return this.processesService.create(createProcessInput);
  }

  @Query(() => [Process], { name: 'processes' })
  findAll() {
    return this.processesService.findAll();
  }

  @Query(() => Process, { name: 'process' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.processesService.findOne(id);
  }

  @Mutation(() => Process)
  updateProcess(@Args('updateProcessInput') updateProcessInput: UpdateProcessInput) {
    return this.processesService.update(updateProcessInput.id, updateProcessInput);
  }

  @Mutation(() => Process)
  removeProcess(@Args('id', { type: () => Int }) id: number) {
    return this.processesService.remove(id);
  }
}
