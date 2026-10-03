import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { User } from "./entities/user.entity.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    registerUser(createUserDto: CreateUserDto){
        createUserDto.userPassword = bcrypt.hashSync(createUserDto.userPassword, 5);
        return this.userRepository.save(createUserDto);
    }
    async loginUser(createUserDto: CreateUserDto){
        const user = await this.userRepository.findOne({
            where: {
                userEmail: createUserDto.userEmail
            }
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        const match = await bcrypt.compareSync(createUserDto.userPassword, user.userPassword);
        const token = jwt.sign(JSON.stringify(user), 'your_secret_key');

        if (!match) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return token;
    }

}
