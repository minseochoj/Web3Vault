// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Vault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Vault/i);
    expect(titleElement).toBeInTheDocument();
});
