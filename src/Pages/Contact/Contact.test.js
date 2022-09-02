import { render, screen } from '@testing-library/react';
import Contact from '.';

test('Render Contact', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/contact us/i);
  expect(linkElement).toBeInTheDocument();
});