import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, type Relation } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Region } from '../../regions/entities/region.entity.js';
import { Manager } from '../../managers/entities/manager.entity.js';
import { Employee } from '../../employees/entities/employee.entity.js';

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationId: number;
    @Column('text')
    locationName: string;
    @Column('text')
    locationAddress: string;
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
