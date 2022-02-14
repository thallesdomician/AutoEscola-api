import { Module } from '@nestjs/common';
import { ProceduresService } from './procedures.service';
import { ProceduresResolver } from './procedures.resolver';

@Module({
  providers: [ProceduresResolver, ProceduresService]
})
export class ProceduresModule {}
