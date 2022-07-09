# Surya-Ui

It's based on [theme-ui](https://theme-ui.com/) and [framer-motion](https://www.framer.com/motion/)

1. It has responsive rem value with default of six breakpoints
2. It has helper function and usefull hooks that can help you to create fully responsive websites
3. The useActiveBreakpoints hooks is purposed to allow create different methods for each breakpoints but you also can do more things with that, eg: create different animation
4. It has default GridTemplate Components that grow based on value that you can customize
5. The GridTemplate has 12 breakpoints for small screen and 24 breakpoints for large screen, but you can still allowed to customize it, including the gap and each grid width, by creating themeConfig instances from ThemeConfigs Classes
6. The Width of GridTemplate container can be customize as well

## Basic Use

Wrapp your component in the ThemeProvider and you ready to use responsive rem value which 1 rem equal to 10px for each breakpoints.

```js
import YourComponent from './YourComponent'
import { ThemeProvider } from '@gedesurya125/surya-ui';

// theme is same with theme object of theme-ui value
import theme from '.theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <YourComponent>
    </ThemeProvider>
  );
}
```

### Theme Object Example

theme object based on theme-ui. and the breakpoints and root fontSize is already setup behind the scenes

```js
// theme.ts
import { Theme } from 'theme-ui';
export const theme: Theme = {
  // breakpoints : ThemeConfig.breakpoints.slice(1), // already setup behind the scenes
  // styles: {
  //   root: {
  //     fontSize: ThemeConfig.getResponsiveFontSizes(), // already setup behind the scenes
  //   },
  // },
  fonts: {
    body: 'sans-serif',
    heading: 'sans-serif',
    monospace: 'sann-serif',
  },
  // other theme-ui styles goes here
};
```

### Default Values

1. breakpoints

```js
[
  '375px',
  '640px',
  '@media (min-width:800px) and (orientation: portrait)',
  '@media (min-width:800px) and (orientation: landscape)',
  '1000px',
  '1400px',
];
```

2. columnGaps

   columnGaps is the space between columns for each breakpoints.
   each columnGaps value is considered in responsice rem units.

```js
[0.3, 0.4, 0.4, 0.4, 0.5, 0.6];
```

3. columnAmmounts

   columnAmmounts represent the number of columns for each breakpoints

```js
[12, 12, 24, 24, 24, 24];
```

4. containerWidths

   containerWidths is the width of the Container Based Components, eg: GridTemplate

```js
[35, 58, 74, 74, 90, 125];
```

5. growRatio

   growRatio is growing ration of the responsive rem value, by default it's set to 8.5

6. normalizedRemValue

   normailizedRemValue is the start value for 1 rem at breakpoints value, it's set to 10 by default

## CUSTOMIZE The Config

1. Creata a themeConfig instances by using ThemeConfig Class

```js
// themeConfigs.js
import { ThemeConfigs } from '@gedesurya125/surya-ui';
export const themeConfigs = new ThemeConfigs({
  columnGaps: [0.3, 0.4, 0.4, 0.4, 0.5, 0.6],
  columnAmmounts: [12, 12, 24, 24, 24, 24],
  containerWidths: [35, 58, 74, 74, 90, 125],
  growRatio: 8.5,
  normalizedRemValue: 10,
  breakpoints: [
    '375px',
    '640px',
    '@media (min-width:800px) and (orientation: portrait)',
    '@media (min-width:800px) and (orientation: landscape)',
    '1000px',
    '1400px',
  ],
});
```

2. Import the themeConfigs instances to ThemeProvider

```js
import YourComponent from './YourComponent'
import { ThemeProvider } from '@gedesurya125/surya-ui';
import { themeConfigs } from './themeConfigs'

// theme is same with theme object of theme-ui value
import theme from '.theme'

function App() {
  return (
    <ThemeProvider theme={theme} config={themeConfigs}>
      <YourComponent>
    </ThemeProvider>
  );
}
```
