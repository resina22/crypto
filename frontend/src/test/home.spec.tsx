import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Home from '../components/Home';

let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
});

describe('Home component test', function () {
  test('Should be render home ', async () => {
    act(() => {
      ReactDOM.render(<Home />, container);
    });
    const button = container.querySelectorAll("[type='submit']");
    const input = container.querySelectorAll('input');
    const chips = container.querySelectorAll('.MuiChip-root');

    expect(button[0]).not.toBeNull();
    expect(button.length).toEqual(1);
    expect(button[0]?.textContent).toEqual('Atualizar valor monetário');

    expect(input.length).toEqual(1);
    expect(input[0].id).toEqual('value-btc');

    expect(chips.length).toEqual(4);
  });
});
