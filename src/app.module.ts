import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module.js';
import { ProductsModule } from './products/products.module.js';
import { ConfigModule } from '@nestjs/config';
import { ProvidersModule } from './providers/providers.module.js';
import { ManagersModule } from './managers/managers.module.js';
import { LocationModule } from './location/location.module.js';
import { RegionsModule } from './regions/regions.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [
    EmployeesModule,
    ProductsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.host,
      port: +(process.env.port ?? '5432'),
      username: process.env.username,
      password: process.env.pass,
      database: process.env.name,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProvidersModule,
    ManagersModule,
    LocationModule,
    RegionsModule,
    AuthModule,
  ],
})
export class AppModule {}
