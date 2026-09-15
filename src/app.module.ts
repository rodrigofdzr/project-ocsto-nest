import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { EmployeesModule } from './employees/employees.module.js';
import { ProductsModule } from './products/products.module.js';
import { ConfigModule } from '@nestjs/config';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
