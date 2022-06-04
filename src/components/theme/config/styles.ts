import { BREAK_POINTS } from '../constant';
import {
  getResponsiveSize,
  getScreenSizeFromBreakpoint,
} from '../helper/getResponsiveValue';

const responsiveFontSize = BREAK_POINTS.map((breakpoint) => {
  return getResponsiveSize(getScreenSizeFromBreakpoint(breakpoint));
});
export const styles = {
  root: {
    fontSize: responsiveFontSize,
  },
};
