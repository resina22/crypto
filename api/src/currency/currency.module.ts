import { HttpModule, Module } from '@nestjs/common';

import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';
import { CoindeskService } from '../api/coindesk.service';

@Module({
  imports: [HttpModule],
  controllers: [CurrencyController],
  providers: [CurrencyService, CoindeskService],
})
export class CurrencyModule {}
