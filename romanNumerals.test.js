import { test, expect } from "vitest";

function romanNumerals(number) {
  let iCounter = 0;
  let returnValue = "";
  for (let i = 0; i < number; i++) {
    if (number <= 3) {
      returnValue += "I";
    }
  }
  if (number === 4) {
    returnValue += "IV";
  } else if (number === 5) {
    returnValue += "V";
  } else if (number >= 6 && number < 9) {
    returnValue = "V";
    for (let i = 5; i < number; i++) {
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

test("4 in roman numerals is IV", () => {
  expect(romanNumerals(4)).toBe("IV");
});

test("7 in roman numerals is IV", () => {
  expect(romanNumerals(7)).toBe("VII");
});
test("8 in roman numerals is IV", () => {
  expect(romanNumerals(8)).toBe("VIII");
});

test("9 in roman numerals is IV", () => {
  expect(romanNumerals(9)).toBe("IX");
});
