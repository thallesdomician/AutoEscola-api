import { Module } from '@nestjs/common';
import { ProcessesService } from './processes.service';
import { ProcessesResolver } from './processes.resolver';

@Module({
  providers: [ProcessesResolver, ProcessesService]
})
export class ProcessesModule {}
