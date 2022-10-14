import {
  getResponsiveSize,
  // getScreenSizeFromBreakpoint,
  getGridTemplateMargin,
} from '../helper/getResponsiveValue';

export interface ThemeConfigsInput {
  columnGaps?: number[];
  columnAmmounts?: number[];
  containerWidths?: number[];
  growRatio?: number;
  normalizedRemValue?: number;
  breakpoints?: string[];
  targetScreenSizes?: number[];
}

//========================== Default Config Value =======================================
const defaultThemeConfigsValue = {
  columnGaps: [0.3, 0.4, 0.4, 0.4, 0.5, 0.6],
  columnAmmounts: [12, 12, 24, 24, 24, 24],
  containerWidths: [35, 58, 74, 74, 90, 125],
  growRatio: 8.5,
  normalizedRemValue: 10,
  breakpoints: [
    '320px',
    '500px',
    '@media (min-width:720px) and (orientation: portrait)',
    '@media (min-width:700px) and (orientation: landscape)',
    '1000px',
    '1200px',
  ],
  targetScreenSizes: [375, 640, 834, 812, 1194, 1440],
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
  targetScreenSizes: number[];

  constructor({
    // default values
    columnGaps = defaultThemeConfigsValue.columnGaps,
    columnAmmounts = defaultThemeConfigsValue.columnAmmounts,
    containerWidths = defaultThemeConfigsValue.containerWidths,
    growRatio = defaultThemeConfigsValue.growRatio,
    normalizedRemValue = defaultThemeConfigsValue.normalizedRemValue,
    breakpoints = defaultThemeConfigsValue.breakpoints,
    targetScreenSizes = defaultThemeConfigsValue.targetScreenSizes,
  }: ThemeConfigsInput) {
    this.columnGaps = columnGaps;
    this.columnAmmounts = columnAmmounts;
    this.containerWidths = containerWidths;
    this.growRatio = growRatio;
    this.normalizedRemValue = normalizedRemValue;
    this.breakpoints = breakpoints;
    this.targetScreenSizes = targetScreenSizes;
  }

  // Method
  getResponsiveFontSizes() {
    return this.targetScreenSizes.map((screeenSize) => {
      return getResponsiveSize(
        // getScreenSizeFromBreakpoint(breakpoint),
        this.growRatio,
        this.normalizedRemValue,
        screeenSize
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

  getGridTemplateMargins() {
    return this.containerWidths.map((conWidth) =>
      getGridTemplateMargin(conWidth, false)
    );
  }
  getGridTemplateMarginNormalizers() {
    return this.containerWidths.map((conWidth) =>
      getGridTemplateMargin(conWidth, true)
    );
  }
}

export const initialConfig = new ThemeConfigs({});
