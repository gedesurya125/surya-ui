// // function
// export const genereateThemeBreakpoints = (
//   arrOfBreakpoints: string[]
// ): string[] => {
//   return arrOfBreakpoints.map((breakpoint) => {
//     if (typeof breakpoint === 'number') return breakpoint;
//     return '@media ' + breakpoint;
//   });
// };

// // values
// // the actiual breakpoints we use in design
// // and it also use to generate responsiive rem values
// export const allBreakpoints: string[] = [
//   '(max-width: 374px)',
//   '(min-width: 375px) and (max-width: 639px)',
//   '(min-width: 640px) and (max-width: 811px)',
//   '(min-width: 812px) and (max-width: 1193px) and (orientation: portrait)',
//   '(min-width: 812px) and (max-width: 1193px) and (orientation: landscape)',
//   '(min-width: 1194px) and (max-width: 1439px)',
//   '(min-width: 1440px)',
// ];

import { BREAK_POINTS } from '../constant';
// breakpoints tobe use in theme-ui configuration
export const breakpoints: string[] = BREAK_POINTS.slice(1);
