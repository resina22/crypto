import { HttpModule, Module } from '@nestjs/common';
import { CurrencyModule } from '../currency/currency.module';
import { CoindeskService } from './coindesk.service';

@Module({
  imports: [HttpModule, CurrencyModule],
  providers: [CoindeskService],
  exports: [],
})
export class ApiModule {}
