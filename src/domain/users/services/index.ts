import { UsersService } from "./users.service"
import { UsersPasswordsService } from "./users-password.service"


export const USERS_SERVICES = [
	UsersService,
	UsersPasswordsService,
]

export { UsersPasswordsService, UsersService,  }
