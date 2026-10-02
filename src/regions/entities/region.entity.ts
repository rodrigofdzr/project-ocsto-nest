import {Entity, OneToMany} from "typeorm";
import {Column, PrimaryGeneratedColumn} from "typeorm";
import {Location} from "../../location/entities/location.entity.js";

@Entity()
export class Region {
    @PrimaryGeneratedColumn('increment')
    regionId: number;

    @Column({
        type: 'text',
        unique: true,
    })
    regionName: string;

    @Column('simple-array')
    regionStates: string[];

    @OneToMany(() => Location, (location) => location.region)
    locations: Location[];


}
