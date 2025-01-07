import { Game } from "src/game/entities/game.entity";

export class CreateMoveDto {
    readonly id: number;
    readonly game: Game;
    readonly from_position: string;
    readonly to_position: string;
    readonly piece_type: string;
    readonly timestamp: Date;
}
