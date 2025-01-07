import { Game } from "src/game/entities/game.entity";
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";

@Entity()
export class Move {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Game, game => game.id)
    game: Game;
    
    @Column({ type: 'varchar', length: 20})
    from_position: string;

    @Column({ type: 'varchar', length: 20})
    to_position: string;

    @Column({ type: 'varchar', enum: ['pond', 'rock', 'queen', 'king', 'knight', 'bishop']})
    piece_type: string;

    @Column({ type: "date", default:  () => "CURRENT_TIMESTAMP" })
    timestamp: Date;
}
