import { SequelizeModule } from '@nestjs/sequelize';
import { DynamicModule, Module } from '@nestjs/common';
import { RestUsersService } from './users.service';
import { RestUsersController } from './users.controller';

@Module({})
export class RestUserModule {
    static forRoot(): DynamicModule {
      return {
        module: RestUserModule,
        imports: [SequelizeModule.forFeature()],
        providers: [RestUsersService],
        controllers: [RestUsersController],
      }
    }
  }
 

