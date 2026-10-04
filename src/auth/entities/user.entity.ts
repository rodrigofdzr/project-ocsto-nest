import { Column, Entity, OneToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import {Manager} from "../../managers/entities/manager.entity.js";
import {Employee} from "../../employees/entities/employee.entity.js";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    userId: string;
    @Column('text')
    userEmail: string;
    @Column('text', {
        unique: true,
    })
    userPassword: string;
    @Column('simple-array',{
        default: "Employee"
    })
    userRoles: string[];

    @OneToOne(() => Manager,{
        eager: true,
    })
    manager: Relation<Manager>;

    @OneToOne(() => Employee,{
        eager: true,
    })
    employee: Relation<Employee>;
}