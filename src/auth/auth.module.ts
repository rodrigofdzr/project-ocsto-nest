import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from './entities/user.entity.js';
import {JwtModule} from "@nestjs/jwt";
import {JWT_KEY} from "../auth/constants/jwt.constants.js";
import {JWT_EXPIRATION} from "../auth/constants/jwt.constants.js";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: JWT_KEY,
            signOptions: { expiresIn: JWT_EXPIRATION },
        }),
    ],

  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
