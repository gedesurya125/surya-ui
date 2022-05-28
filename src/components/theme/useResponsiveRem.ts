import { allBreakpoints } from './config/breakpoints';

export const genereateMediaQuery = (breakpoint: number | string) => {
  if (typeof breakpoint === 'number') return `(min-width: ${breakpoint}px)`;
  return breakpoint;
};

// getting first number group of a string
export const getNumberFromString = (
  stringContainNumber: string
): number | null => {
  const getNumRegex = /\d+/gi;
  const numberArray = stringContainNumber.match(getNumRegex);
  return numberArray && Number(numberArray[0]);
};

export const getScreenWidth = (breakpoint: number | string) => {
  if (typeof breakpoint !== 'number') return getNumberFromString(breakpoint);
  return breakpoint;
};

export const useResponsiveRem = () => {
  const GROW_RATIO = 0.1;
  allBreakpoints.forEach((breakpoint) => {
    const mediaQuery = window.matchMedia(genereateMediaQuery(breakpoint));
    mediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        console.log('current breakpoints is', breakpoint);
        document.documentElement.style.fontSize = `calc(${GROW_RATIO} * (100vw - ${getScreenWidth(
          breakpoint
        )}px) + 10px)`;
      }
    });
  });
};
