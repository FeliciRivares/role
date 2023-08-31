import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @Get()
    getAll(){
        return this.usersService.getAllUser()
    }
}

