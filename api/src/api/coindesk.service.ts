import { HttpService, Injectable } from '@nestjs/common';

import { CurrencyRepository } from '../currency/currency.repository';
import { CurrencyService } from '../currency/currency.service';
import { Descriptions } from '../currency/currency.enum';
import { Coindesk, BPI } from './coindesk.interface';

@Injectable()
export class CoindeskService {
  private COINDESK_URL;
  constructor(
    private http: HttpService,
    private currencyService: CurrencyService,
  ) {
    const { COINDESK_URL } = process.env;
    this.COINDESK_URL = COINDESK_URL;
  }

  async getCurrentPrice() {
    return this.currentPrice().then((currentPrice) =>
      this.insertNewCurrencies(currentPrice),
    );
  }

  async currentPrice(): Promise<Coindesk> {
    return await this.http
      .get(`${this.COINDESK_URL}/bpi/currentprice/BTC.json`)
      .toPromise()
      .then(({ data }) => data)
      .catch((e) => {});
  }

  async insertNewCurrencies(currentPrice: Coindesk): Promise<Coindesk> {
    const respository = new CurrencyRepository();
    const currencies = await this.currencyService.currencies(respository);
    let {
      bpi: {
        USD: { rate_float },
      },
    } = currentPrice;

    const newCurrencies = await Object.keys(currencies).map(async (country) => {
      const currentPrice = parseFloat(currencies[country]);
      return await this.generateBpi(country, currentPrice, rate_float);
    });

    const bpi = await (await Promise.all(newCurrencies)).reduce(
      (acc, value) => (acc = { ...value, ...acc }),
      {},
    );

    return {
      ...currentPrice,
      bpi: { ...currentPrice.bpi, ...bpi },
    } as Coindesk;
  }

  async generateBpi(
    country: string,
    currentPrice: number,
    basePrice: number,
  ): Promise<BPI> {
    const rate = currentPrice * basePrice;
    const rateFormated = rate.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });

    const description = Descriptions[country];
    return {
      [country]: {
        code: country,
        rate: rateFormated,
        description,
        rate_float: parseFloat(rate.toFixed(2)),
      },
    } as BPI;
  }
}
