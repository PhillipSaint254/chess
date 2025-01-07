import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 20})
    status: "in progress" | "complete";

    @Column({ type: "date", default:  () => "CURRENT_TIMESTAMP"  })
    created_at: Date;

    @Column({ type: "date", default:  () => "CURRENT_TIMESTAMP" })
    completed_at: Date;

    @Column({ type: "int" })
    winner: number
}

// export class Game {
//     id: number;
//     status: "in progress" | "complete";
//     created_at: Date;
//     completed_at: Date;
//     winner: number
// }
