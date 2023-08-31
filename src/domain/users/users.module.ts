import { DynamicModule, Module } from '@nestjs/common'
import { provideClass } from 'src/shared'
import { USERS_SERVICE, PASSWORD_HASH_SALT, USERS_REPOSITORY } from './typing/constants'
import { User } from './entities'
import { UsersService, USERS_SERVICES } from './services'
import { provideEntity } from 'src/libs/database'

import { UsersModuleOptions } from './typing'

@Module({})
export class UserModule {
	static options: UsersModuleOptions

	static getProviders() {
		return [
			provideClass(USERS_SERVICE, UsersService),
			{
				provide: PASSWORD_HASH_SALT,
				useValue: UserModule.options.passwordHashSalt,
			},
			provideEntity(USERS_REPOSITORY, User),

			...USERS_SERVICES,
		]
	}
	static getExports() {
		return [USERS_SERVICE, USERS_REPOSITORY]
	}
	static getImports() {
		return []
	}
	static forRoot(options: UsersModuleOptions): DynamicModule {
		UserModule.options = options
		return {
			module: UserModule,
			providers: UserModule.getProviders(),
			imports: UserModule.getImports(),
			exports: UserModule.getExports(),
		}
	}
	static forFeature(): DynamicModule {
		return {
			module: UserModule,
			providers: UserModule.getProviders(),
			imports: UserModule.getImports(),
			exports: UserModule.getExports(),
		}
	}
}
