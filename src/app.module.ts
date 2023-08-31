import { REST_MODULE } from './rest/index'
import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule } from '@nestjs/config'
// import { User } from './rest/users/users.model'
import { CommandModule } from 'nestjs-command'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { UserModule } from './domain/users/users.module'
import { getEnv } from './shared';
import { $config } from './config'
import { DatabaseModule } from './libs/database'

@Module({
	imports: [
	DatabaseModule.forRoot(...$config.getDatabaseConfig()),
	UserModule.forRoot({ passwordHashSalt: getEnv('LOCAL_HASH_SALT') }),
    CommandModule,
    EventEmitterModule.forRoot(),
		// ConfigModule.forRoot({
		// 	envFilePath: `.${process.env.NODE_ENV}.env`,
		// }),
		// SequelizeModule.forRoot({
		// 	dialect: 'postgres',
		// 	host: process.env.POSTGRES_HOST,
		// 	port: Number(process.env.POSTGRES_PORT),
		// 	username: process.env.POSTGRES_NAME,
		// 	password: process.env.POSTGRES_PASSWORD,
		// 	database: process.env.POSTGRES_NAME,
		// 	autoLoadModels: true,
		// }),
		...REST_MODULE(),
	],
})
export class AppModule {}
