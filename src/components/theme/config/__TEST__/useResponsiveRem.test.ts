// function
import {
  genereateMediaQuery,
  getNumberFromString,
} from "../../useResponsiveRem";

// helper function

test("importing number 347 should return (min-width: 347px)", () => {
  expect(genereateMediaQuery(347)).toBe("(min-width: 347px)");
});

test("importing string (min-width: 800px) and (orientation: landscape) should return as it's", () => {
  expect(
    genereateMediaQuery("(min-width: 800px) and (orientation: landscape)")
  ).toBe("(min-width: 800px) and (orientation: landscape)");
});

test("get number from a string, should return 800 from (min-width: 800px) and (orientation: landscape)", () => {
  expect(
    getNumberFromString(
      "(min-width: 800px) and (max-width: 1000px) (orientation: landscape)"
    )
  ).toBe(800);
});
