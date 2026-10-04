import { Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
import { ManyToOne, JoinColumn, type Relation } from 'typeorm';
import { Location } from '../../location/entities/location.entity.js';
import { User } from '../../auth/entities/user.entity.js';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  employeeId: string;

  @Column({ type: 'text' })
  employeeName: string;

  @Column({ type: 'text' })
  employeelastName: string;

  @Column({ type: 'text' })
  employeePhoneNumber: string;

  @Column({ type: 'text', unique: true })
  employeeEmail: string;

  @Column({
      type: 'text',
        nullable: true
  })
  employeePhoto: string;

  @ManyToOne(()  => Location, (location) => location.employees)
    @JoinColumn({ name: 'locationId' })
  location: Relation<Location>;

  @OneToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: Relation<User>;
}
