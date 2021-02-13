import React from 'react';
import ReactDOM from 'react-dom';
import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
} from '@testing-library/react';
import Login from '../components/Login/Index';
import { utimesSync } from 'fs';

let utils: RenderResult;
let container: Element;
let data = {} as { email: string; password: number; error: string };

beforeEach(() => {
  utils = render(<Login />);
  container = utils.container;
  data = {
    email: 'teste@teste.com.br',
    password: 123456,
    error: 'Email ou senha inválido',
  };
});

afterEach(() => {
  cleanup;
});

describe('Login component test', function () {
  test('Should be render login ', async () => {
    const button = container.querySelectorAll("[type='submit']");
    const input = container.querySelectorAll('input');

    expect(button[0]).not.toBeNull();
    expect(button.length).toEqual(1);
    expect(button[0]?.textContent).toEqual('Entrar');

    expect(input.length).toEqual(2);
    expect(input[0].id).toEqual('login');
    expect(input[1].id).toEqual('password');
  });

  test('Should be valid change input form format', function () {
    const email = utils.getByLabelText('Email') as HTMLInputElement;
    const password = utils.getByLabelText('Senha') as HTMLInputElement;
    fireEvent.change(email, { target: { value: data.email } });
    fireEvent.change(password, { target: { value: '123ad456' } });

    expect(email.value).toBe(data.email);
    expect(password.value).toBe(`${data.password}`);
  });

  test('Should be invalid login', function () {
    const email = utils.getByLabelText('Email') as HTMLInputElement;
    const password = utils.getByLabelText('Senha') as HTMLInputElement;
    const btnSubmit = utils.getByText('Entrar');
    fireEvent(
      btnSubmit,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: false,
      }),
    );

    const message = utils.getByText(data.error);
    expect(message.textContent).toBe(data.error);
  });
});
