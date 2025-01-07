import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game/entities/game.entity';
import { PlayerModule } from './player/player.module';
import { MoveModule } from './move/move.module';
import { Move } from './move/entities/move.entity';
import { Player } from './player/entities/player.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'root',
      username: 'postgres',
      entities: [Game, Move, Player],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }),
    GameModule,
    PlayerModule,
    MoveModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
