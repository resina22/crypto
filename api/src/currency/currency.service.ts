import { Injectable } from '@nestjs/common';
import { Currency, Currencies } from './currency.interface';
import { CurrencyRepository } from './currency.repository';

@Injectable()
export class CurrencyService {
  async update(
    objectCurrency: Currency,
    repository: CurrencyRepository,
  ): Promise<boolean | string> {
    const currencies = await repository.findAll();
    if (typeof currencies === 'string') {
      return currencies;
    }

    const validated = this.valid(currencies, objectCurrency);

    if (validated !== true) {
      return validated;
    }
    return repository.update(objectCurrency);
  }

  currencies(repository: CurrencyRepository): Promise<string | Currencies> {
    return repository
      .findAll()
      .then((currencies) => currencies)
      .catch((e) => e);
  }

  async find(currency: Currency, repository: CurrencyRepository) {
    return repository.find(currency);
  }

  private valid(currencies, objectCurrency: Currency) {
    const { currency, value } = objectCurrency;

    if (!currencies[currency]) {
      return 'Moeda inválida';
    }

    if (value <= 0) {
      return 'Valor inválido';
    }

    return true;
  }
}
