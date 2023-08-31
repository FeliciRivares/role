import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import * as _ from 'lodash'
import { FindOptionsWhere } from 'typeorm'
import { UserAlreadyExistsException } from '../exeptions'
import {
	CreateUserPayload,
	ICheckExistUserPayload,
	IUser,
	IUsersService,
	UpdateUserPayload,
	
	USERS_REPOSITORY,
} from '../typing'
import { IUsersRepository } from '../typing/interface/users-db.interfaces'
import { UsersPasswordsService } from './users-password.service'


@Injectable()
export class UsersService implements IUsersService {
	@Inject(USERS_REPOSITORY) private readonly usersRepository: IUsersRepository
	constructor(private readonly usersPasswordsService: UsersPasswordsService) {}

	public async create(payload: CreateUserPayload) {
		const exist = await this.existUser(payload)
		if (exist) throw new UserAlreadyExistsException()
		const passwordSalt = this.usersPasswordsService.createUserSalt()

		const password = await this.usersPasswordsService.hashPassword(
			payload.password,
			passwordSalt,
		)

		const user = await this.usersRepository.save({
			...payload,
			password,
			passwordSalt,
		})

		return user
	}

	public async update(id: number, payload: UpdateUserPayload) {
		let user = await this.usersRepository.findOne({ where: { id } })
        // @ts-ignore
		user = this.usersRepository.merge(user, _.omitBy(_.omit(payload), _.isNil))
		await this.usersRepository.update(id, user)
		return user
	}
// @ts-ignore
	public async getOneByEmail(email: string) {
		return this.usersRepository.findOneBy({ email })
	}
    // @ts-ignore
	public async getOneBy(where: FindOptionsWhere<IUser> | FindOptionsWhere<IUser>[]) {
		return this.usersRepository.findOneBy(where)
	}

	public async compareUserPassword(userId: number, password: string) {
		return await this.usersPasswordsService.compareUserPasswords(userId, password)
	}

	public async changeUserPassword(userId: number, newPassword: string) {
		return await this.usersPasswordsService.changeUserPassword(userId, newPassword)
	}

	public async existUser(payload: ICheckExistUserPayload) {
		const query = this.usersRepository
			.createQueryBuilder('it')
			.where('it.email = :email', { email: payload.email })
		const user = await query.getOne()
		return Boolean(user)
	}

	public async delete(id: number) {
		return await this.usersRepository.delete(id)
	}
}
