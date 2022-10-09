import React from 'react';
import { useThemeConfig } from '../context';

// imporovement to make user no need to pass the themeconfig to this hooks

export const useActiveBreakpoints = () => {
  const configs = useThemeConfig();
  const [matchesBreakPoints, setMathcesBreakpoints] = React.useState<boolean[]>(
    []
  );
  React.useEffect(() => {
    // Get the setted up breakpoints on the project
    const breakpoints = configs?.breakpoints;

    // remove '@media' string from the setted up breakpoints
    const removedMedia = breakpoints.map((breakpoint) =>
      breakpoint.replace('@media ', '')
    );

    // test if the breakpoints not contain query like min-widh
    // if so add min widh to the query
    const rgxMatchQueryKey = /[min\-width][max\-width]/gi;
    const addMinWidthQueryIfNotContainAny = removedMedia.map((mediaQuery) => {
      if (rgxMatchQueryKey.test(mediaQuery)) return mediaQuery;
      return `(min-width: ${mediaQuery})`;
    });

    // Match Media Method
    const matchBreakpoints = () =>
      addMinWidthQueryIfNotContainAny.map((query, index) => {
        // ignore the first breakpoints, because it should be always true
        if (index === 0) return true;
        const mediaQuery = window?.matchMedia(query);
        return mediaQuery.matches;
      });

    const Observer = new ResizeObserver(() => {
      setMathcesBreakpoints(matchBreakpoints());
    });

    Observer.observe(document.body);
    return () => {
      Observer.disconnect();
    };
  }, []);
  return matchesBreakPoints;
};
