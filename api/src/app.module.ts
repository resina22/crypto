import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { CurrencyModule } from './currency/currency.module';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, CurrencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('crypto');
  }
}
