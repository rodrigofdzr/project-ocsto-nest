import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, type Relation } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Region } from '../../regions/entities/region.entity.js';
import { Manager } from '../../managers/entities/manager.entity.js';
import { Employee } from '../../employees/entities/employee.entity.js';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationId: number;

    @ApiProperty({
        default: "OCSO Juriquilla"
    })
    @Column('text')
    locationName: string;

    @ApiProperty({
        default: "Calle 1, Juriquilla, Querétaro, México"
    })
    @Column('text')
    locationAddress: string;

    @ApiProperty({
        default: [20.623, -100.392]
    })
    @Column('simple-array')
    locationLatLong: number[];

    @OneToOne(() => Manager,{
        eager: true,
    })
    @JoinColumn({
        name: 'managerId',
    })
    manager: Relation<Manager>;

    @ManyToOne(() => Region, (region) => region.locations, )
    @JoinColumn({
        name: 'regionId',
    })
    region: Relation<Region>;

    @OneToMany(() => Employee, (employee) => employee.location)
    employees: Employee[];

}
