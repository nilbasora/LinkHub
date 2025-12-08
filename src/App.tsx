import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { LinkPage } from './components/LinkPage';

export default function App() {
  return (
    <ThemeProvider>
      <LinkPage />
    </ThemeProvider>
  );
}
