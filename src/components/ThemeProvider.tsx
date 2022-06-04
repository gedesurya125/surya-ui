import React, { FC } from 'react';
import { ThemeProvider as ThemeUiProvider } from 'theme-ui';
import type { ThemeProviderProps as CoreThemeProviderProps } from '@theme-ui/core';
import type { MDXProviderComponents } from '@theme-ui/mdx';

import {
  // useResponsiveRem,
  theme as defaultTheme,
} from './theme';
export interface ThemeProviderProps
  extends Pick<CoreThemeProviderProps, 'theme'> {
  children?: React.ReactNode;
  components?: MDXProviderComponents;
}

// By default Base component use default theme configuration,
// But you can create other custom theme and extends the theme object to it to get the correct breakpoints configuration
export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
  ...props
}) => {
  // useResponsiveRem();
  return (
    <ThemeUiProvider theme={theme} {...props}>
      {children}
    </ThemeUiProvider>
  );
};
