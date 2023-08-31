import { Connection } from 'typeorm'

export const provideEntity = (name:any, entity:any) => {
	return {
		provide: name,
		useFactory: (connection: Connection) => connection.getRepository(entity),
		inject: [Connection],
	}
}

export const provideCustomRepository = (name:any, repo:any) => {
	return {
		provide: name,
		useFactory: (connection: Connection) => connection.getCustomRepository(repo),
		inject: [Connection],
	}
}
