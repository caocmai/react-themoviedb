import { render, screen } from '@testing-library/react';
import App from './App';

test('header has popular title', () => {
  render(<App />);
  const linkElement = screen.getByText(/popular/i);
  expect(linkElement).toBeInTheDocument();
});

test('header has upcoming title', () => {
  render(<App />);
  const linkElement = screen.getByText(/upcoming/i);
  expect(linkElement).toBeInTheDocument();
});
