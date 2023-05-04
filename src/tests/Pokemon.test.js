import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se é renderizado um card com as informações de determinado Pokémon:', () => {
  renderWithRouter(<App />);

  const pikachu = screen.getByText(/pikachu/i);

  expect(pikachu).toBeInTheDocument();

  const tipe = screen.getByTestId('pokemon-type');

  expect(tipe).toHaveTextContent('Electric');

  const pesoMedio = screen.getByText(/average weight: 6\.0 kg/i);

  expect(pesoMedio).toBeInTheDocument();

  const imagem = screen.getByRole('img', { name: /pikachu sprite/i });

  expect(imagem).toBeInTheDocument();

  expect(imagem.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');

  expect(imagem.alt).toBe('Pikachu sprite');
});

test('Teste o link de navegação', () => {
  const { history } = renderWithRouter(<App />);

  const linkDetalhes = screen.getByRole('link', { name: /more details/i });

  expect(linkDetalhes).toBeInTheDocument();

  userEvent.click(linkDetalhes);

  const tituloDetalhes = screen.getByRole('heading', { name: /pikachu details/i });

  expect(tituloDetalhes).toBeInTheDocument();

  const { pathname } = history.location;

  expect(pathname).toBe('/pokemon/25');
});

test('Teste se é favorito', () => {
  renderWithRouter(<App />);

  const moreDetailsLink = screen.getByRole('link', { name: /more details/i });

  userEvent.click(moreDetailsLink);

  const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });

  userEvent.click(checkbox);

  const estrelaFavorito = screen.getByRole('img', { name: /pikachu is marked as favorite/i });

  expect(estrelaFavorito).toBeInTheDocument();

  expect(estrelaFavorito.src).toBe('http://localhost/star-icon.svg');

  expect(estrelaFavorito.alt).toBe('Pikachu is marked as favorite');
});
