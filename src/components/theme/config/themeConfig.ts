import {
  getResponsiveSize,
  getScreenSizeFromBreakpoint,
  getGridTemplateMarginNormalizer,
} from '../helper/getResponsiveValue';

export interface ThemeConfigsInput {
  columnGaps?: number[];
  columnAmmounts?: number[];
  containerWidths?: number[];
  growRatio?: number;
  normalizedRemValue?: number;
  breakpoints?: string[];
}

//========================== Default Config Value =======================================
const defaultThemeConfigsValue = {
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
};
// =====================================================================================

/***************************************************************************************
 * Theme Config Class that you can use to create new custom config based on your project
 ***************************************************************************************/
export class ThemeConfigs {
  columnGaps: number[];
  columnAmmounts: number[];
  containerWidths: number[];
  growRatio: number;
  normalizedRemValue: number;
  breakpoints: string[];

  constructor({
    // default values
    columnGaps = defaultThemeConfigsValue.columnGaps,
    columnAmmounts = defaultThemeConfigsValue.columnAmmounts,
    containerWidths = defaultThemeConfigsValue.containerWidths,
    growRatio = defaultThemeConfigsValue.growRatio,
    normalizedRemValue = defaultThemeConfigsValue.normalizedRemValue,
    breakpoints = defaultThemeConfigsValue.breakpoints,
  }: ThemeConfigsInput) {
    this.columnGaps = columnGaps;
    this.columnAmmounts = columnAmmounts;
    this.containerWidths = containerWidths;
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
    return this.containerWidths.map(
      (conWidth, index) =>
        (conWidth - (this.columnAmmounts[index] - 1) * this.columnGaps[index]) /
          this.columnAmmounts[index] +
        'rem'
    );
  }
  getGridTemplateColumns() {
    return this.columnAmmounts.map(
      (colAmmount) => `repeat(${colAmmount}, 1fr)`
    );
  }
  getContainerWidths() {
    return this.containerWidths.map((conWidth) => conWidth + 'rem');
  }
  getColumnGaps() {
    return this.columnGaps.map((gap) => gap + 'rem');
  }
  getGridTemplateMarginNormalizers() {
    return this.containerWidths.map((conWidth) =>
      getGridTemplateMarginNormalizer(conWidth)
    );
  }
}

// ======================== Theme Config object =======================

export const initialConfig = new ThemeConfigs(defaultThemeConfigsValue);
