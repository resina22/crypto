import * as fs from 'fs';
import * as path from 'path';
import { Currency } from './currency.interface';
import * as Data from '../assets/currencies.json';

export class CurrencyRepository {
  private pathFile;
  constructor(fileName = 'currencies') {
    this.pathFile = path.join(__dirname, fileName);
  }

  async findAll(): Promise<string | Object> {
    try {
      if (!Data) {
        throw 'Erro ao buscar os dados';
      }

      return Data;
    } catch (e) {
      return e.message;
    }
  }

  async find(currency: Currency) {
    const currencies = await this.findAll();
    return currencies[currency.currency];
  }

  async update(objectCurrency: Currency) {
    try {
      let currencies = await this.findAll();
      if (typeof currencies === 'string') {
        return false;
      }
      const { currency, value } = objectCurrency;
      currencies = { ...currencies, [currency]: value };

      let data = JSON.stringify(currencies);
      await fs.writeFileSync(this.pathFile, data);
      return true;
    } catch (e) {
      return false;
    }
  }
}
