import { Controller, HttpStatus, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CurrencyRepository } from './currency.repository';
import { CurrencyService } from './currency.service';

@Controller('crypto/btc')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}
  @Put('')
  async update(@Req() request: Request, @Res() response: Response) {
    const { body: currency } = request;
    let repository = new CurrencyRepository();
    const updated = await this.currencyService.update(currency, repository);

    if (updated === true) {
      return response.status(HttpStatus.OK).json({
        message: 'Valor alterado com sucesso!',
      });
    }

    return response.status(HttpStatus.BAD_REQUEST).json({
      message: updated,
    });
  }
}
