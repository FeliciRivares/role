import { CreateUserDto } from './dto/create-user.dto';
import { RestUsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class RestUsersController {
    constructor(private readonly userService: RestUsersService){}

    // @ApiOperation({ summary: 'Add new user' })
	// @ApiOkResponse({
	// 	status: 201,
	// 	description: 'Return user',
	// })

    // @Post()
    // create(@Body() userDto: CreateUserDto) {
    //     return this.userService.createUser(userDto)
    // }
   
    // @ApiOperation({ summary: 'Return all users' })
	// @ApiOkResponse({
	// 	status: 201,
	// 	description: 'Return all users',
	// })

    // @Get()
    // getAll(){
    //     return this.userService.getAllUser()
    // }
}



