import { Controller, Get, HttpStatus, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CoindeskService } from '../api/coindesk.service';
import { CurrencyRepository } from './currency.repository';
import { CurrencyService } from './currency.service';

@Controller('crypto/btc')
export class CurrencyController {
  constructor(
    private currencyService: CurrencyService,
    private coindesk: CoindeskService,
  ) {}

  @Get('')
  async get(@Res() response: Response) {
    await this.coindesk
      .getCurrentPrice()
      .then((currentPrice) => {
        response.status(HttpStatus.OK).json(currentPrice);
      })
      .catch((e) => {
        console.log(e);
        response.status(HttpStatus.BAD_REQUEST).json({
          message: 'Erro ao buscar dados',
        });
      });
  }

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
