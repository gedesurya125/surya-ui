import { GROW_RATIO, NORMALIZED_REM_VALUE } from '../../constants/constant';

/**
 * Get the first number group from a sting
 * for example "media query (min-width: 800px)"
 * will return 800
 */
export const getFirstNumberFromString = (
  stringContainNumber: string
): number => {
  const getNumRegex = /\d+/gi;
  const numberArray = stringContainNumber.match(getNumRegex);
  if (numberArray && numberArray.length > 0) return Number(numberArray[0]);
  return 0;
};

/**
 * Get the first number from a string if it was a string,
 * otherwise return the number if it's a number
 */
export const getScreenSizeFromBreakpoint = (
  breakpoint: number | string
): number => {
  if (typeof breakpoint !== 'number')
    return getFirstNumberFromString(breakpoint);
  return breakpoint;
};

/**
 * return the responsive css growing value of the given value
 * for example given breakpoint = 360
 * the return value will be `calc(8.5 / 360 * (100vw - 360px) + 10px)
 */
export const getResponsiveSize = (breakpointsScreenSize: number) =>
  `calc(${GROW_RATIO} / ${breakpointsScreenSize} * (100vw - ${breakpointsScreenSize}px) + ${NORMALIZED_REM_VALUE}px)`;

export const getGridTemplateMarginNormalizer = (contaienrWidth: number) =>
  `calc((100vw - ${contaienrWidth}rem) * -0.5)`;
