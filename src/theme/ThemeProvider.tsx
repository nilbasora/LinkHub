// src/theme/ThemeProvider.tsx
import React from 'react';
import { pageConfig } from '../config/loadConfig';
import { getThemeTokens } from '.';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const tokens = getThemeTokens(
    pageConfig.theme?.name,
    pageConfig.theme?.options,
  );

  return (
    <ThemeContext.Provider value={tokens}>
      <div className={tokens.app.wrapper}>{children}</div>
    </ThemeContext.Provider>
  );
};
