import React, { FC } from 'react';
import { ThemeProvider as ThemeUiProvider, Theme } from 'theme-ui';
import { ThemeConfigs, initialConfig } from './theme/config/themeConfig';
import {
  ThemeConfigProvider,
  ThemeConfigContext,
} from './context/themeConfigContext';

import type { ThemeProviderProps as CoreThemeProviderProps } from '@theme-ui/core';
// import type { MDXProviderComponents } from '@theme-ui/mdx';

import {
  // useResponsiveRem,
  theme as defaultTheme,
} from './theme';

// By default ThemeProvider component use default theme and config configuration,
// But you can create other custom theme and extends the theme object to it to get the correct breakpoints configuration

export interface ThemeProviderProps {
  theme?: Theme;
  config?: ThemeConfigs;
  children: React.ReactNode;
}
export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
  config = initialConfig,
}) => {
  console.log('this is initial config', initialConfig);
  return (
    <ThemeConfigProvider value={config}>
      <UiProvider theme={theme}>{children}</UiProvider>
    </ThemeConfigProvider>
  );
};

// Elements
export interface ProviderProps extends Pick<CoreThemeProviderProps, 'theme'> {}

const UiProvider: FC<ProviderProps> = ({ children, theme, ...props }) => {
  const ThemeConfig = React.useContext(ThemeConfigContext);

  /**
   * this baseTheme merge the theme with custom inputted theme via props
   * if you want to cusomize the other values of other responsive
   * components such as GridTemplate, you have to customize it via Theme config
   *
   * this baseTheme create default breakpoints and responsive root fontSize value
   * that can be used by developer to design responsive component via rem units
   */

  const baseTheme: Theme = {
    breakpoints: ThemeConfig.breakpoints.slice(1),
    styles: {
      root: {
        fontSize: ThemeConfig.getResponsiveFontSizes(),
      },
    },
    ...theme,
  };
  return (
    <ThemeUiProvider theme={baseTheme} {...props}>
      {children}
    </ThemeUiProvider>
  );
};
