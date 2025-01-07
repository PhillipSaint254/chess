import { Injectable } from '@nestjs/common';
import { CreateMoveDto } from './dto/create-move.dto';
import { UpdateMoveDto } from './dto/update-move.dto';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Move } from './entities/move.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoveService {
  // constructor(
  //   @InjectRepository(Move) 
  //   private gameRepository: Repository<Move>,
  // ) {}

  create(createMoveDto: CreateMoveDto) {
    return 'This action adds a new move';
  }

  findAll() {
    return `This action returns all move`;
  }

  findOne(id: number) {
    return `This action returns a #${id} move`;
  }

  update(id: number, updateMoveDto: UpdateMoveDto) {
    return `This action updates a #${id} move`;
  }

  remove(id: number) {
    return `This action removes a #${id} move`;
  }
}
