import { Inject, Injectable } from '@nestjs/common'
import Redis, { Redis as RedisClient, Cluster, ClusterOptions, RedisKey, RedisValue } from 'ioredis'
import { REDIS_OPTIONS } from '../consts'
import { IRedisModuleOptions } from '../interfaces'

@Injectable()
export class RedisService {
	private client: Redis

	constructor(@Inject(REDIS_OPTIONS) options: IRedisModuleOptions) {
		this.client = new Redis(options)
		
	}

	async set(key: RedisKey, value: RedisValue, lifeTime?: number) {
		if (lifeTime) await this.client.set(key, value, 'EX', lifeTime)
		else await this.client.set(key, value)
	}

	async get(key: RedisKey) {
		return await this.client.get(key)
	}

	async del(key: RedisKey) {
		await this.client.del(key)
	}
}
