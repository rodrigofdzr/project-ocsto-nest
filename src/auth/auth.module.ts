import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from './entities/user.entity.js';
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            global: true,
            secret: 'your_secret_key',
            signOptions: { expiresIn: '1h' },
        }),
    ],

  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
