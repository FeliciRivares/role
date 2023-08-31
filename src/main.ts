import * as dotenv from 'dotenv'
dotenv.config()

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DomainExceptionsFilter } from './shared/filters/domain-exception.filter';
import * as basicAuth from 'express-basic-auth';

async function start() {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { excludeExtraneousValues: true },
    }),
  );

  app.enableCors({
    origin: '*',
  });

  app.useGlobalFilters(new DomainExceptionsFilter(new Logger()));

  app.use(
    '/docs',
    basicAuth({
      challenge: true,
      users: {
        admin: '123qqq',
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('ROLE')
    .setDescription(' ')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(PORT);
}

start();
