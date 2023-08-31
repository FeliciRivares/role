import { FindOptionsWhere } from 'typeorm'
import { IUser } from './user.interface'

export interface CreateUserPayload {
	email: string
	password: string
}

export interface UpdateUserPayload {
	email?: string
	password?: string
}

export interface IUsersService {
	create(payload: CreateUserPayload): Promise<IUser>
	// update(id: number, payload: UpdateUserPayload): Promise<IUser>
	// delete(id: number): Promise<any>
	// getOneByEmail(email: string): Promise<IUser>
	// compareUserPassword(userId: number, password: string): Promise<boolean>
	// getOneBy(where: FindOptionsWhere<IUser> | FindOptionsWhere<IUser>[]): Promise<IUser>
	// changeUserPassword(userId: number, newPassword: string): Promise<void>
	// existUser(payload: ICheckExistUserPayload): Promise<boolean>
}

export interface ICheckExistUserPayload extends CreateUserPayload {}
