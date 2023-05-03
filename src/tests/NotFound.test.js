import React from 'react';
import { screen, render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

test('Se a página contém um heading h2 com o texto Page requested not found', () => {
  render(<NotFound />);

  const headingH2 = screen.getByRole('heading', { name: /page requested not found/i });

  expect(headingH2).toBeInTheDocument();
});

test('Se a página mostra a imagem', () => {
  render(<NotFound />);

  const imagem = screen.getByRole('img', { name: /pikachu crying because the page requested was not found/i });

  expect(imagem.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
