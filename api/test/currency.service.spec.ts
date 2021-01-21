import { Test, TestingModule } from '@nestjs/testing';

import { Currency } from 'src/currency/currency.interface';
import { CurrencyRepository } from '../src/currency/currency.repository';
import { CurrencyService } from '../src/currency/currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;
  let repository: CurrencyRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyService],
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);
    repository = new CurrencyRepository();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be currencies', async () => {
    const currencies = await service.currencies(repository);
    expect(currencies).not.toEqual('Erro ao buscar os dados');
    expect(currencies).toMatchSnapshot();
  });

  it('should find specific currency', async () => {
    let currency = { currency: 'BRL', value: 0 } as Currency;
    currency = await service.find(currency, repository);

    expect(currency).not.toBeUndefined();
    expect(currency).not.toBeNull();
    expect(currency).toMatchSnapshot();
  });

  it('should be updated currency', async () => {
    const currency = { currency: 'BRL', value: 1500 } as Currency;
    const updated = await service.update(currency, repository);

    expect(updated).toEqual(true);
  });

  it('should be invalid currency', async () => {
    let currency = { currency: 'BRL', value: 0 } as Currency;
    let updated = await service.update(currency, repository);
    expect(updated).toEqual('Valor inválido');

    currency = { currency: 'JPY', value: 1500 } as Currency;
    updated = await service.update(currency, repository);
    expect(updated).toEqual('Moeda inválida');
  });
});
