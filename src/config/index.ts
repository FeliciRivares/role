// import { IMailerModuleOptions } from 'src/domain/mailer/typing'
// import { IFilesStorageOptions } from 'src/libs/file-storage/interfaces'
// import { IRedisModuleOptions } from 'src/libs/redis/interfaces'
import { DatabaseModule } from 'src/libs/database'
import { getEnv, stringToBoolean } from 'src/shared'
import { ENTITIES } from './entities.config'

const getDatabaseConfig = (): Parameters<(typeof DatabaseModule)['forRoot']> => {
	return [
		{
            type: 'postgres',
			host: process.env.POSTGRES_HOST,
			port: Number(process.env.POSTGRES_PORT || 5432),
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_NAME,
			synchronize: true, 
		},
		ENTITIES,
	]
}

// const getMailerConfig = (): IMailerModuleOptions => {
// 	return {
// 		domain: getEnv('MAILER_DOMAIN'),
// 		port: Number(getEnv('MAILER_PORT')),
// 		password: getEnv('MAILER_PASSWORD'),
// 		login: getEnv('MAILER_LOGIN'),
// 		protocol: getEnv('MAILER_PROTOCOL'),
// 		test: stringToBoolean(getEnv('MAILER_TEST_MODE')),
// 		secure: stringToBoolean(getEnv('MAILER_SECURE')),
// 	}
// }

// const getRedisConfig = (): IRedisModuleOptions => {
// 	return {
// 		port: Number(getEnv('REDIS_PORT')),
// 		host: getEnv('REDIS_HOST'),
// 		password: getEnv('REDIS_PASS'),
// 	}
// }

// export const getFilesStorageConfig = (): IFilesStorageOptions => {
// 	return {
// 		host: getEnv('MINIO_HOST'),
// 		port: Number(getEnv('MINIO_PORT')),
// 		accessKey: getEnv('MINIO_ACCESS_KEY'),
// 		secretKey: getEnv('MINIO_SECRET_KEY'),
// 		urlPrefix: getEnv('MINIO_URL_PREFIX'),
// 		bucket: getEnv('MINIO_BUCKET') || 'files',
// 		privateBucket: getEnv('MINIO_PRIVATE_BUCKET'),
// 		useSSL: getEnv('MINIO_USE_SSL')
// 	}
// }
// const getJwtConfig = () => {
// 	return { jwtKey: getEnv('JWT_KEY'), payloadKey: getEnv('JWT_PAYLOAD_KEY') }
// }

export const $config = {
	getDatabaseConfig,
	// getMailerConfig,
	// getRedisConfig,
	// getFilesStorageConfig,
	// getJwtConfig,
}
