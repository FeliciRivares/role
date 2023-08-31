import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User ){}

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto)

        return user

    }

    async getAllUser(){
        const users = await this.userRepository.findAll({include: {all: true}});

        return users
    }

}