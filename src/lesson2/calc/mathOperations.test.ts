import { sum, minus, mul, div } from "./mathOperations";

//sum
test("sum(10, 34)", () => {
  expect(sum(10, 34)).toBe(44);
});

test("sum(1, 2)", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum(23, 27)", () => {
  expect(sum(23, 27)).toBe(50);
});

//minus
test("minus(10, 34)", () => {
  expect(minus(10, 34)).toBe(-24);
});

test("minus(1, 2)", () => {
  expect(minus(1, 2)).toBe(-1);
});

test("minus(23, 27)", () => {
  expect(minus(23, 27)).toBe(-4);
});

//div
test("div(10, 34)", () => {
  expect(div(10, 34)).toBe(0.29);
});

test("div(1, 2)", () => {
  expect(div(1, 2)).toBe(0.5);
});

test("div(23, 27)", () => {
  expect(div(23, 27)).toBe(0.85);
});

//mul
test("mul(10, 34)", () => {
  expect(mul(10, 34)).toBe(340);
});

test("mul(1, 2)", () => {
  expect(mul(1, 2)).toBe(2);
});

test("mul(23, 27)", () => {
  expect(mul(23, 27)).toBe(621);
});
