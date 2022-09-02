import { render, screen } from '@testing-library/react';
import Price from '.';

test('Render Price', () => {
  render(<Price />);
  const linkElement = screen.getByText(/price/i);
  expect(linkElement).toBeInTheDocument();
});