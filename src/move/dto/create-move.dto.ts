export class CreateMoveDto {
    readonly id: number;
    readonly game: number;
    readonly from_position: string;
    readonly to_position: string;
    readonly piece_type: string;
    readonly timestamp: Date;
}
