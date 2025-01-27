import { Module } from '@nestjs/common';
import { MoveService } from './move.service';
import { MoveController } from './move.controller';
import { Move } from './entities/move.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Move])],
  controllers: [MoveController],
  providers: [MoveService],
})
export class MoveModule {}
