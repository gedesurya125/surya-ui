import {
  getResponsiveSize,
  getScreenSizeFromBreakpoint,
  getGridTemplateMarginNormalizer,
} from '../helper/getResponsiveValue';

export interface ThemeConfig {
  columnGap: number[];
  columnAmmount?: number[];
  containerWidth?: number[];
  growRatio?: number;
  normalizedRemValue?: number;
  breakpoints?: string[];
}

export class ThemeConfigs {
  columnGap: number[];
  columnAmmount: number[];
  containerWidth: number[];
  growRatio: number;
  normalizedRemValue: number;
  breakpoints: string[];

  constructor({
    // default values
    columnGap = [0.3, 0.4, 0.4, 0.4, 0.5, 0.6],
    columnAmmount = [12, 12, 24, 24, 24, 24],
    containerWidth = [35, 58, 75, 75, 108, 130],
    growRatio = 8.5,
    normalizedRemValue = 10,
    breakpoints = [
      '375px',
      '640px',
      '@media (min-width:834px) and (orientation: portrait)',
      '@media (min-width:812px) and (orientation: landscape)',
      '1194px',
      '1440px',
    ],
  }) {
    this.columnGap = columnGap;
    this.columnAmmount = columnAmmount;
    this.containerWidth = containerWidth;
    this.growRatio = growRatio;
    this.normalizedRemValue = normalizedRemValue;
    this.breakpoints = breakpoints;
  }

  // Method
  getResponsiveFontSizes() {
    return this.breakpoints.map((breakpoint) => {
      return getResponsiveSize(
        getScreenSizeFromBreakpoint(breakpoint),
        this.growRatio,
        this.normalizedRemValue
      );
    });
  }

  getColumnWidths() {
    return this.containerWidth.map(
      (conWidth, index) =>
        (conWidth - (this.columnAmmount[index] - 1) * this.columnGap[index]) /
          this.columnAmmount[index] +
        'rem'
    );
  }
  getGridTemplateColumns() {
    return this.columnAmmount.map((colAmmount) => `repeat(${colAmmount}, 1fr)`);
  }
  getContainerWidths() {
    return this.containerWidth.map((conWidth) => conWidth + 'rem');
  }
  getColumnGaps() {
    return this.columnGap.map((gap) => gap + 'rem');
  }
  getGridTemplateMarginNormalizers() {
    return this.containerWidth.map((conWidth) =>
      getGridTemplateMarginNormalizer(conWidth)
    );
  }
}

// =========== Theme Config object =================
export const themeConfig: ThemeConfig = {
  columnGap: [0.3, 0.4, 0.4, 0.4, 0.5, 0.6],
  columnAmmount: [12, 12, 24, 24, 24, 24],
  containerWidth: [35, 58, 75, 75, 108, 130],
  growRatio: 8.5,
  normalizedRemValue: 10,
  breakpoints: [
    '375px',
    '640px',
    '@media (min-width:834px) and (orientation: portrait)',
    '@media (min-width:812px) and (orientation: landscape)',
    '1194px',
    '1440px',
  ],
};

export const initialConfig = new ThemeConfigs({
  columnGap: [0.3, 0.4, 0.4, 0.4, 0.5, 0.6],
  columnAmmount: [12, 12, 24, 24, 24, 24],
  containerWidth: [35, 58, 75, 75, 108, 130],
  growRatio: 8.5,
  normalizedRemValue: 10,
  breakpoints: [
    '375px',
    '640px',
    '@media (min-width:834px) and (orientation: portrait)',
    '@media (min-width:812px) and (orientation: landscape)',
    '1194px',
    '1440px',
  ],
});
