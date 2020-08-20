import { NestFactory } from '@nestjs/core';
import * as http from 'http';
import { NextApiHandler } from 'next';

import { AppModule } from './app.module';

export module Backend {
  let listener: NextApiHandler | null = null;

  export async function getListener() {
    if (!listener) {
      const app = await NestFactory.create(AppModule);
      app.setGlobalPrefix("api");

      await app.init();

      const server: http.Server = app.getHttpServer();
      [listener] = server.listeners("request") as NextApiHandler[];
    }

    return listener;
  }
}
