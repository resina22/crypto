import { Injectable } from '@nestjs/common';
import { Auth } from './auth.interface';
import { createCipheriv, randomBytes } from 'crypto';

@Injectable()
export class AuthService {
  login(auth: Auth): boolean | string {
    if (!this.validate(auth)) {
      return false;
    }

    return this.newToken();
  }

  validate(auth: Auth): boolean {
    const { email, password } = auth;

    if (!email || !password) {
      return false;
    }

    const emailValid = /\w{3,}@\w{2,}.\w{2,}/.exec(email);
    const isOnlyNumber = `${password}`.match(/[^0-9]/);

    return emailValid && !isOnlyNumber;
  }

  private newToken(): string {
    return randomBytes(8).toString('hex');
  }
}
