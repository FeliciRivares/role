export interface IUser {
	id: number

	email: string

	password: string
	passwordSalt: string;

	banned: boolean

	banReason?: string
}
