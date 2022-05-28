// function
import { genereateThemeBreakpoints } from "../breakpoints";

// values
import { allBreakpoints } from "../breakpoints";

test("genereateThemeBreakpoints", () => {
  expect(genereateThemeBreakpoints(allBreakpoints)).toStrictEqual([
    "@media (min-width: 0px) and (max-width: 374px)",
    "@media (min-width: 375px) and (max-width: 639px)",
    "@media (min-width: 640px) and (max-width: 833px)",
    "@media (min-width: 834px) and (max-width: 1193px) and (orientation: portrait)",
    "@media (min-width: 812px) and (max-width: 1193px) and (orientation: landscape)",
    "@media (min-width: 1194px) and (max-width: 1439px)",
    "@media (min-width: 1440px)",
  ]);
});
