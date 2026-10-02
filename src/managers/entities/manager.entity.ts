import { Entity, PrimaryGeneratedColumn, Column, OneToOne, type Relation } from 'typeorm';
import { Location } from '../../location/entities/location.entity.js';

@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    managerId: string;

    @Column('text')
    managerFullName: string;
    @Column('float')
    managerSalary: number;
    @Column('text')
    managerEmail: string;
    @Column('text')
    managerPhoneNumber: string

    @OneToOne(() => Location)
    location: Relation<Location>;
}
