import { render, screen } from '@testing-library/react';
import Description from './components/Description/Description';

test('renders rick and morty', () => {
  render(<Description />);
  const linkElement = screen.getByText(/Rick and Morty/i);
  expect(linkElement).toBeInTheDocument();
});
