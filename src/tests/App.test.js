import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders title', () => {
  render(<App />);
  const textElement = screen.getByText(/Listado tareas/i);
  expect(textElement).toBeInTheDocument();
});
