import { Table, Model, Column, DataType } from 'sequelize-typescript'
import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IUser } from '../typing/interface/user.interface'

interface UserCreationAttrs {
	email: string
	password: string
}

@Entity('users')
export class User extends BaseEntity implements IUser {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: DataType.STRING,  allowNull: false })
	email: string

	@Column({ type: DataType.STRING, allowNull: false })
	password: string

	@Column({ type: DataType.STRING, allowNull: false })
	passwordSalt: string


	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	banned: boolean

	@Column({ type: DataType.STRING, allowNull: true })
	banReason: string
}
