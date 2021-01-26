import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Login from '../components/Login/Index';

let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
});

describe('Login component test', function () {
  test('Should be render login ', async () => {
    act(() => {
      ReactDOM.render(<Login />, container);
    });
    const button = container.querySelectorAll("[type='submit']");
    const input = container.querySelectorAll('input');

    expect(button[0]).not.toBeNull();
    expect(button.length).toEqual(1);
    expect(button[0]?.textContent).toEqual('Entrar');

    expect(input.length).toEqual(2);
    expect(input[0].id).toEqual('login');
    expect(input[1].id).toEqual('password');
  });
});
