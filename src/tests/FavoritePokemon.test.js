import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FavoritePokemon } from '../pages';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
  renderWithRouter(<FavoritePokemon />);

  const mensagem = screen.getByText(/no favorite pokémon found/i);

  expect(mensagem).toBeInTheDocument();
});

test('Teste se apenas são exibidos os Pokémon favoritados.', () => {
  renderWithRouter(<App />);

  const linkDetails = screen.getByRole('link', { name: /more details/i });

  userEvent.click(linkDetails);

  const favoriteCheckbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });

  userEvent.click(favoriteCheckbox);

  const favoriteLink = screen.getByRole('link', { name: /favorite pokémon/i });

  userEvent.click(favoriteLink);

  const favoritePokemon = screen.getByText(/pikachu/i);

  expect(favoritePokemon).toBeInTheDocument();
});
