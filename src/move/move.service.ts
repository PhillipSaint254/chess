import { Injectable } from '@nestjs/common';
import { CreateMoveDto } from './dto/create-move.dto';
import { UpdateMoveDto } from './dto/update-move.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Move } from './entities/move.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoveService {
  constructor(
    @InjectRepository(Move) 
    private moveRepository: Repository<Move>,
  ) {}

  create(createMoveDto: CreateMoveDto) {
    return this.moveRepository.save(createMoveDto);
  }

  findAll() {
    return this.moveRepository.find();
  }

  findOne(id: number) {
    return this.moveRepository.findOneById(id);
  }

  update(id: number, updateMoveDto: UpdateMoveDto) {
    return this.moveRepository.update(id, updateMoveDto);
  }

  remove(id: number) {
    return this.moveRepository.delete(id);
  }
}
