import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Auth } from './auth.interface';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  login(@Req() request: Request, @Res() response: Response): Response {
    const { body: auth } = request;
    const token = this.authService.login(auth as Auth);

    if (token) {
      return response.status(HttpStatus.OK).json({
        token,
      });
    }
    return response.status(HttpStatus.UNAUTHORIZED).json({
      message: 'Campos inválidos',
    });
  }
}
