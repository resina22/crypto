import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: () => void) {
    const {
      headers: { authorization },
    } = request;

    if (!this.authenticated(authorization)) {
      return response.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Token inválido',
      });
    }
    next();
  }

  private authenticated(token: string): boolean {
    token = `${token}`.trim();
    return token.length == 16;
  }
}
