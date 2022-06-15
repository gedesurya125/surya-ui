import React from 'react';
import { initialConfig } from '../theme/config/themeConfig';
import type { ThemeConfigs } from '../theme/config/themeConfig';

export const ThemeConfigContext =
  React.createContext<ThemeConfigs>(initialConfig);

export interface ThemeConfigProvider {
  value: ThemeConfigs;
  children: React.ReactNode;
}

export const ThemeConfigProvider: React.FC<ThemeConfigProvider> = ({
  value,
  children,
}) => {
  return (
    <ThemeConfigContext.Provider value={value}>
      {children}
    </ThemeConfigContext.Provider>
  );
};
