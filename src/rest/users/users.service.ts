import { USERS_SERVICES } from './../../domain/users/services/index'
import { CreateUserDto } from './dto/create-user.dto'
import { Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { IUser } from './../../domain/users/typing/interface/user.interface'
import { USERS_SERVICE, IUsersService, USERS_REPOSITORY } from 'src/domain/users/typing'
import { IUsersRepository } from 'src/domain/users/typing/interface/users-db.interfaces'
import { RedisService } from 'src/libs/redis'

@Injectable()
export class RestUsersService {
	// @Inject(USERS_SERVICE) private readonly usersService: IUsersService
	// @Inject(USERS_REPOSITORY)
	// private readonly usersRepository: IUsersRepository
	constructor() {}

	// public async createUser(payload: CreateUserDto) {
	// 	return await this.usersService.create(payload)
	// }

	// public async getAllUser(){
	//     const users = await this.usersRepository.find();

	//     return users
	// }
}
