import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { LoginUserDto } from './dto/login-user.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    @Post('signup')
    signup(@Body() CreateAuthDto: CreateUserDto) {
      return this.authService.registerUser(CreateAuthDto);
    }

    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
      return this.authService.loginUser(loginUserDto);
    }

    @Patch("/:email")
    updateUser(@Body() updateUserDto: UpdateUserDto, @Param('email') userEmail: string) {
        return this.authService.updateUser(userEmail, updateUserDto);
    }
}
