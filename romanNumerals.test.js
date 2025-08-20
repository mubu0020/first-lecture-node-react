import { test, expect } from "vitest";

function romanNumerals(number) {
  return "I";
}

test("1 in roman numerals is I", () => {
  expect(romanNumerals(1)).toBe("I");
});

test("2 in roman numerals is II", () => {
  expect(romanNumerals(2)).toBe("II");
});
