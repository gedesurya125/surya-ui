import React from 'react';
import { initialConfig } from '../theme/config/themeConfig';
import type { ThemeConfigs } from '../theme/config/themeConfig';

// Theme Config Context
export const ThemeConfigContext =
  React.createContext<ThemeConfigs>(initialConfig);

// Theme Config Provider Interface
export interface ThemeConfigProvider {
  value: ThemeConfigs;
  children: React.ReactNode;
}

// Theme Config Hook
export const useThemeConfig = () => {
  return React.useContext(ThemeConfigContext);
};

// Theme Config Provider
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
