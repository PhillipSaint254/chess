import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {

  constructor(
    @InjectRepository(Game) 
    private gameRepository: Repository<Game>,
  ) {}

  // private allGames = [
  //   { id: 1, status: "in progress", created_at: Date.prototype.toTimeString(), completed_at: Date.prototype.toTimeString(), winner: 1 },
  //   { id: 2, status: "in progress", created_at: Date.prototype.toTimeString(), completed_at: Date.prototype.toTimeString(), winner: 2 },
  //   { id: 3, status: "in progress", created_at: Date.prototype.toTimeString(), completed_at: Date.prototype.toTimeString(), winner: 2 },
  //   { id: 4, status: "in progress", created_at: Date.prototype.toTimeString(), completed_at: Date.prototype.toTimeString(), winner: 1 },
  //   { id: 5, status: "in progress", created_at: Date.prototype.toTimeString(), completed_at: Date.prototype.toTimeString(), winner: 2 }
  // ]

  async create(createGameDto: CreateGameDto) {
    this.gameRepository.save(createGameDto);
    return await this.findAll();
  }

  findAll() {
    return this.gameRepository.find();
  }

  findOne(id: number) {
    return this.gameRepository.findOneById(id);
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return this.gameRepository.update(id, updateGameDto);
  }

  remove(id: number) {
    return this.gameRepository.delete(id);
  }
}
