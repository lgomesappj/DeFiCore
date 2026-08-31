// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DeFiCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DeFiCore/i);
    expect(titleElement).toBeInTheDocument();
});
