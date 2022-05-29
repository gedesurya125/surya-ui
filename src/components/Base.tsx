import React, { FC } from 'react';
import { ThemeProvider } from 'theme-ui';
import type { ThemeProviderProps as CoreThemeProviderProps } from '@theme-ui/core';
import type { MDXProviderComponents } from '@theme-ui/mdx';

import { useResponsiveRem, theme as defaultTheme } from './theme';
export interface ThemeProviderProps
  extends Pick<CoreThemeProviderProps, 'theme'> {
  children?: React.ReactNode;
  components?: MDXProviderComponents;
}

export const Base: FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
  ...props
}) => {
  useResponsiveRem();
  return (
    <ThemeProvider theme={theme} {...props}>
      {children}
    </ThemeProvider>
  );
};
