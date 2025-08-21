import { test, expect } from "vitest";

function romanNumerals(number) {
  let result;
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      number -= romanNumerals[i].value;
    }
  }
  return (result = "");
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
test("10 in roman numerals is X", () => {
  expect(romanNumerals(10)).toBe("X");
});

test("13 in roman numerals is XIII", () => {
  expect(romanNumerals(13)).toBe("XIII");
});
