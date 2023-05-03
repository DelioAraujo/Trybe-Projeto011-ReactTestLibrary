import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);

  const home = screen.getByRole('link', { name: /home/i });
  const about = screen.getByRole('link', { name: /about/i });
  const favPoke = screen.getByRole('link', { name: /favorite pokémon/i });

  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(favPoke).toBeInTheDocument();
});

test('testar o link home', () => {
  const { history } = renderWithRouter(<App />);

  const linkHome = screen.getByRole('link', { name: /home/i });

  userEvent.click(linkHome);

  const { pathname } = history.location;

  expect(pathname).toBe('/');
});

test('Se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação', () => {
  const { history } = renderWithRouter(<App />);

  const about = screen.getByRole('link', { name: /about/i });

  userEvent.click(about);

  const { pathname } = history.location;

  expect(pathname).toBe('/about');
});

test('Se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação', () => {
  const { history } = renderWithRouter(<App />);

  const favorites = screen.getByRole('link', { name: /favorite pokémon/i });

  userEvent.click(favorites);

  const { pathname } = history.location;

  expect(pathname).toBe('/favorites');
});
