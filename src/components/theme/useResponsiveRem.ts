import { allBreakpoints } from './config/breakpoints';

export const genereateMediaQuery = (breakpoint: number | string) => {
  if (typeof breakpoint === 'number') return `(min-width: ${breakpoint}px)`;
  return breakpoint;
};

// getting first number group of a string
export const getFirstNumberFromString = (
  stringContainNumber: string
): number | null => {
  const getNumRegex = /\d+/gi;
  const numberArray = stringContainNumber.match(getNumRegex);
  return numberArray && Number(numberArray[0]);
};

export const getScreenSizeFromBreakpoint = (breakpoint: number | string) => {
  if (typeof breakpoint !== 'number')
    return getFirstNumberFromString(breakpoint);
  return breakpoint;
};

const getCurrentScreenSize = () => window.innerWidth;

const selectMatchesBreakpoint = (currentScreenWidth: number) => {
  const breakPointMinWidth = allBreakpoints?.map(
    (breakpoint) => getScreenSizeFromBreakpoint(breakpoint) || []
  );
  const breakPointMatches = breakPointMinWidth.reverse().find((breakpoint) => {
    return currentScreenWidth >= breakpoint;
  });
  return breakPointMatches || breakPointMinWidth[0]; // if breakPointMatches is undefined (not fount any matches) return the first break pioints
};

export const useResponsiveRem = () => {
  // run correct initial responsive rem setup when page first load
  const breakpointMatchesOnPageLoad = selectMatchesBreakpoint(
    getCurrentScreenSize()
  );
  document.documentElement.style.fontSize = `calc(10 / ${breakpointMatchesOnPageLoad} * (100vw - ${breakpointMatchesOnPageLoad}px) + 10px)`;

  // Listen for breakpoint changes
  allBreakpoints.forEach((breakpoint) => {
    const mediaQuery = window.matchMedia(genereateMediaQuery(breakpoint));
    mediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        console.log('this is current media query applied', breakpoint);
        document.documentElement.style.fontSize = `calc(10 / ${getScreenSizeFromBreakpoint(
          breakpoint
        )} * (100vw - ${getScreenSizeFromBreakpoint(breakpoint)}px) + 10px)`;
      }
    });
  });
};
