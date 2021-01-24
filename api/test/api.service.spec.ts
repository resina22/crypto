import { HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CoindeskService } from '../src/api/coindesk.service';
import { Coindesk } from '../src/api/coindesk.interface';
import { CurrencyModule } from '../src/currency/currency.module';
import { CurrencyService } from '../src/currency/currency.service';
import { resolve } from 'path';

const currentPrice = {
  time: {
    updated: 'Jan 21, 2021 10:34:00 UTC',
    updatedISO: '2021-01-21T10:34:00+00:00',
    updateduk: 'Jan 21, 2021 at 10:34 GMT',
  },
  disclaimer:
    'This data was produced from the CoinDesk Bitcoin Price Index (USD).',
  bpi: {
    USD: {
      code: 'USD',
      rate: '32,729.8800',
      description: 'United States Dollar',
      rate_float: 32729.88,
    },
    BTC: {
      code: 'BTC',
      rate: '1.0000',
      description: 'Bitcoin',
      rate_float: 1,
    },
  },
} as Coindesk;

describe('ApiService', () => {
  let service: CoindeskService;
  let mockCurrentPrice: jest.Mock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot(), CurrencyModule],
      providers: [CoindeskService, CurrencyService],
    }).compile();

    service = module.get<CoindeskService>(CoindeskService);
    mockCurrentPrice = jest.fn().mockReturnValue(currentPrice);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should to be get current price ', async () => {
    expect(mockCurrentPrice()).toMatchSnapshot();
  });

  it('should to be get current price and add new currency ', async () => {
    const newCunrrencies = await service.insertNewCurrencies(
      mockCurrentPrice(),
    );
    expect(newCunrrencies).toMatchSnapshot();
  });

  it('should to be generated bpi ', async () => {
    const bpi = await service.generateBpi('BRL', 6506.6717, 5.4);
    expect(bpi).toEqual({
      BRL: {
        code: 'BRL',
        description: 'Brazilian Real',
        rate: '35,136.03',
        rate_float: 35136.03,
      },
    });
  });

  it('should to be get current price by modified', async () => {
    const spy = jest.spyOn(service, 'currentPrice').mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          resolve(currentPrice);
        }),
    );

    const { bpi } = await service.getCurrentPrice();
    expect(spy).toHaveBeenCalled();
    expect(currentPrice.bpi.USD).toEqual(bpi.USD);
  });
});
