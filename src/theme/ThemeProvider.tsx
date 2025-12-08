import React from 'react';
import { getThemeTokens } from '../config/themes';
import { pageConfig } from '../config/loadConfig';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const tokens = getThemeTokens(
    pageConfig.theme?.name,
    pageConfig.theme?.options,
  );

  const style: React.CSSProperties = Object.fromEntries(
    Object.entries(tokens)
  ) as any;

  return (
    <div style={style} className="min-h-screen w-full flex justify-center items-start py-10">
      {children}
    </div>
  );
};
