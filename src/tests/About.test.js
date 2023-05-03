import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

test('Se a página contém um heading h2 com o texto About Pokédex', () => {
  renderWithRouter(<About />);

  const headingH2 = screen.getByRole('heading', { name: /about pokédex/i });

  expect(headingH2).toBeInTheDocument();
});

test('Se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  renderWithRouter(<About />);

  const paragrafo1 = screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);

  expect(paragrafo1).toBeInTheDocument();

  const paragrafo2 = screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);

  expect(paragrafo2).toBeInTheDocument();
});

test('Se a página contém a seguinte imagem de uma Pokédex', () => {
  renderWithRouter(<About />);

  const image = screen.getByRole('img', { src: '/pokédex/i' });

  expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
