import { render, screen } from '@testing-library/react';
import App from './App';

test('Render App', () => {
  render(<App />);
  const linkElement = screen.getByText(/good bussiness/i);
  expect(linkElement).toBeInTheDocument();
});
