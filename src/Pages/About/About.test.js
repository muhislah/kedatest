import { render, screen } from '@testing-library/react';
import About from '.';

test('Render About', () => {
  render(<About />);
  const linkElement = screen.getByText(/ about /i);
  expect(linkElement).toBeInTheDocument();
});