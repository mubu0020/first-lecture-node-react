import { test, expect } from "vitest";

function romanNumerals(number) {
  let iCounter = 0;
  let returnValue = "";
  for (let i = 0; i < number; i++) {
    if (number !== iCounter) {
      iCounter++;
      returnValue += "I";
    }
  }
  return returnValue;
}

test("1 in roman numerals is I", () => {
  expect(romanNumerals(1)).toBe("I");
});

test("2 in roman numerals is II", () => {
  expect(romanNumerals(2)).toBe("II");
});

test("3 in roman numerals is III", () => {
  expect(romanNumerals(3)).toBe("III");
});
