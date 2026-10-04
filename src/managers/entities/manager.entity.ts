import { Entity, PrimaryGeneratedColumn, Column, OneToOne, type Relation, JoinColumn} from 'typeorm';
import { Location } from '../../location/entities/location.entity.js';
import { User } from '../../auth/entities/user.entity.js';

@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    managerId: string;

    @Column('text')
    managerFullName: string;
    @Column('float')
    managerSalary: number;
    @Column('text',{
        unique: true,
    })
    managerEmail: string;
    @Column('text')
    managerPhoneNumber: string

    @OneToOne(() => Location)
    location: Relation<Location>;

    @OneToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: Relation<User>;
}
