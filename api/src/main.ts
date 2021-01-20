import { NestFactory } from '@nestjs/core';
import { AppFilter } from './app.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');
  app.useGlobalFilters(new AppFilter());

  const { PORT } = process.env;
  await app.listen(PORT || 3000);
}
bootstrap();
