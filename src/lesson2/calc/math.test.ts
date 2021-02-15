import { secondPriorities, firstPriorities } from "./math";

it("firstPriorities([2, '+', 2, '*', 4])", () => {
  expect(firstPriorities([2, "+", 2, "*", 4])).toEqual([2, "+", 8]);
});

it("firstPriorities([8, '+', 2, '*', 10, '*', 100, '/', 10])", () => {
  expect(firstPriorities([8, "+", 2, "*", 10, "*", 100, "/", 10])).toEqual([
    8,
    "+",
    200,
  ]);
});

it("secondPriorities([2, '-', 3, '+', 2])", () => {
  expect(secondPriorities([2, "-", 3, "+", 2])).toEqual(1);
});

it("secondPriorities(firstPriorities([2, '+', 2, '*', 4]))", () => {
  expect(secondPriorities(firstPriorities([2, "+", 2, "*", 4]))).toEqual(10);
});

it("secondPriorities(firstPriorities([8, '+', 2, '*', 10, '*', 100, '/', 10]))", () => {
  expect(
    secondPriorities(firstPriorities([8, "+", 2, "*", 10, "*", 100, "/", 10]))
  ).toEqual(208);
});
