export class CreateGameDto {
    readonly id: number;
    readonly status: "in progress" | "complete";
    readonly created_at: Date;
    readonly completed_at: Date;
    readonly winner: number
}
