import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Se a página contém um heading h2 com o texto Encountered Pokémon', () => {
  renderWithRouter(<App />);

  const title = screen.getByRole('heading', { name: /encountered pokémon/i });
  expect(title).toBeInTheDocument();
});

test('Testa se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
  renderWithRouter(<App />);

  const next = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(next).toBeInTheDocument();
  const pikachu = screen.getByText(/pikachu/i);
  expect(pikachu).toBeInTheDocument();
  userEvent.click(next);
  const charmander = screen.getByText(/charmander/i);
  expect(charmander).toBeInTheDocument();
  userEvent.click(next);
  const caterpie = screen.getByText(/caterpie/i);
  expect(caterpie).toBeInTheDocument();
  userEvent.click(next);
  const ekans = screen.getByText(/ekans/i);
  expect(ekans).toBeInTheDocument();
  userEvent.click(next);
  const alakazam = screen.getByText(/alakazam/i);
  expect(alakazam).toBeInTheDocument();
  userEvent.click(next);
  const mew = screen.getByText(/mew/i);
  expect(mew).toBeInTheDocument();
  userEvent.click(next);
  const rapidash = screen.getByText(/rapidash/i);
  expect(rapidash).toBeInTheDocument();
  userEvent.click(next);
  const snorlax = screen.getByText(/snorlax/i);
  expect(snorlax).toBeInTheDocument();
  userEvent.click(next);
  const dragonair = screen.getByText(/dragonair/i);
  expect(dragonair).toBeInTheDocument();
  userEvent.click(next);
  expect(pikachu).toBeInTheDocument();
});

test('Teste se é mostrado apenas um Pokémon por vez', () => {});

test('Se a Pokédex tem os botões de filtro', () => {
  renderWithRouter(<App />);

  const arrayBotoes = screen.getAllByTestId('pokemon-type-button');
  const buttonTexts = arrayBotoes.map((button) => button.textContent);
  const pokemonTypes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
  expect(buttonTexts).toEqual(pokemonTypes);

  const allButton = screen.getByRole('button', { name: /all/i });
  expect(allButton).toBeVisible();
});

test('A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo', () => {
  renderWithRouter(<App />);

  const fire = screen.getByRole('button', { name: /fire/i });

  userEvent.click(fire);

  const charmander = screen.getByText(/charmander/i);

  expect(charmander).toBeInTheDocument();

  const next = screen.getByRole('button', { name: /próximo pokémon/i });

  userEvent.click(next);

  const rapidash = screen.getByText(/rapidash/i);

  expect(rapidash).toBeInTheDocument();
});

test('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
  renderWithRouter(<App />);

  const fireBtn = screen.getByRole('button', { name: /fire/i });

  userEvent.click(fireBtn);

  const allBtn = screen.getByRole('button', { name: /all/i });

  expect(allBtn).toBeInTheDocument();

  userEvent.click(allBtn);

  const pikachu = screen.getByText(/pikachu/i);

  expect(pikachu).toBeInTheDocument();
});
