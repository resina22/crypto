import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../src/auth/auth.service';

import { Auth } from '../src/auth/auth.interface';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should login format valid', () => {
    const auth: Auth = {
      email: 'email@mail.com',
      password: 135982,
    };

    expect(service.validate(auth)).toEqual(true);
  });

  it('should login format invalid', () => {
    let invalidEmail: Auth = {
      email: 'email@.com',
      password: 135982,
    };

    expect(service.validate(invalidEmail)).toEqual(null);
  });

  it('should login and token in response', () => {
    let auth: Auth = {
      email: 'email@email.com',
      password: 135982,
    };

    expect(service.login(auth)).toHaveLength(16);
  });
});
