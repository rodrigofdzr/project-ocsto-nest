import { Entity } from 'typeorm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity.js';
@Entity()
export class Provider {
  @PrimaryGeneratedColumn('uuid')
  providerId: string;

  @Column('text')
  providerName: string;

  @Column('text')
  providerEmail: string;

  @Column({
    type: "text",
    nullable: true
  })
  providerPhone: string;

  @OneToMany(() => Product, (product) => product.provider)
  products: Product[];

}
