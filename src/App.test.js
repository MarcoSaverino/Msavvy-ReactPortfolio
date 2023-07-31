import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Marco Saverino text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Marco Saverino/i);
  expect(linkElement).toBeInTheDocument();
});
