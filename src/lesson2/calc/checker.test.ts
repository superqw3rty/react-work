import { checker, bracketsCheck } from "./checker";

test("bracketsCheck('[1, '+', '(', 2, '*', 3, '-', '(', 2, '+', 1, ')', '/', 5, '+', '(', 6, '-', 9, ')', ')', '-', 1 ])", () => {
  expect(
    bracketsCheck([
      1,
      "+",
      "(",
      2,
      "*",
      3,
      "-",
      "(",
      2,
      "+",
      1,
      ")",
      "/",
      5,
      "+",
      "(",
      6,
      "-",
      9,
      ")",
      ")",
      "-",
      1,
    ])
  ).toEqual(true);
});
test("bracketsCheck('[1, '+',  2, '*', 3, '-', '(', 2, '+', 1, ')', '/', 5, '+', '(', 6, '-', 9, ')', '-', 1 ])", () => {
  expect(
    bracketsCheck([
      1,
      "+",
      "(",
      2,
      "*",
      3,
      "-",
      "(",
      2,
      "+",
      1,
      ")",
      "/",
      5,
      "+",
      "(",
      6,
      "-",
      9,
      ")",
      ")",
      "-",
      1,
    ])
  ).toEqual(true);
});
test("bracketsCheck('[1, '+',  1 ])", () => {
  expect(
    bracketsCheck([
      1,
      "+",
      "(",
      2,
      "*",
      3,
      "-",
      "(",
      2,
      "+",
      1,
      ")",
      "/",
      5,
      "+",
      "(",
      6,
      "-",
      9,
      ")",
      ")",
      "-",
      1,
    ])
  ).toEqual(true);
});
test("bracketsCheck(''(', '(', 1, ')', ')'])", () => {
  expect(bracketsCheck(["(", "(", 1, ")", ")"])).toEqual(false);
});
test("bracketsCheck(''(', '(', 1, ')', ')'])", () => {
  expect(bracketsCheck(["(", "(", 1, ")", ")"])).toEqual(false);
});
test("bracketsCheck(''(', '(', 1, ')', ')'])", () => {
  expect(bracketsCheck([1, "+", "(", 1, "-", 2, ")", ")"])).toEqual(false);
});

test("checker('1 + 2')", () => {
  expect(checker("1 + 2")).toEqual([1, "+", 2]);
});

test("checker('1 * 2')", () => {
  expect(checker("1 * 2")).toEqual([1, "*", 2]);
});

test("checker('12 / 2')", () => {
  expect(checker("12 / 2")).toEqual([12, "/", 2]);
});

test("checker('151 - 212')", () => {
  expect(checker("151 - 212")).toStrictEqual([151, "-", 212]);
});

test("checker('( 151 - 212 )')", () => {
  expect(checker("( 151 - 212 )")).toStrictEqual(["(", 151, "-", 212, ")"]);
});
test("checker('1 + 2 - ( 1 * 10 / 5 + 14141241 ) * 0.1 + 19')", () => {
  expect(checker("1 + 2 - ( 1 * 10 / 5 + 14141241 ) * 1 + 19")).toStrictEqual([
    1,
    "+",
    2,
    "-",
    "(",
    1,
    "*",
    10,
    "/",
    5,
    "+",
    14141241,
    ")",
    "*",
    1,
    "+",
    19,
  ]);
});

describe("Parser invalid cases", () => {
  it("checker('121/ 2')", () => {
    expect(() => checker("121/ 2")).toThrow(TypeError("Unexpected string"));
  });

  it("checker('1 / *')", () => {
    expect(() => checker("1 / *")).toThrow(TypeError("Unexpected string"));
  });

  it("checker('1 1 2')", () => {
    expect(() => checker("1 1 2")).toThrow(TypeError("Unexpected string"));
  });

  it("checker('/ / *')", () => {
    expect(() => checker("/ / *")).toThrow(TypeError("Unexpected string"));
  });
});
