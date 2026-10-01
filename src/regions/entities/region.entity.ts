import {Entity} from "typeorm";

@Entity()
export class Region {
    @PrimaryGeneratedColumn('incremental')
    regionId: number;

    @Column('text')
    regionName: string;

    @Column('array')
    regionStates: string[];
}
