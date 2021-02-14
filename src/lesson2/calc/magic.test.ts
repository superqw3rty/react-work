import { magic } from "./magic";

test("magic([8, '+', 2, '*', 10, '-', 100, '/', 10])", () => {
  expect(magic([8, "+", 2, "*", 10, "-", 100, "/", 10])).toEqual(18);
});

it("magic([2, '+', 2, '*', 4])", () => {
  expect(magic([2, "+", 2, "*", 4])).toEqual(10);
});

it("magic([8, '+', 2, '*', 10, '*', 100, '/', 10])", () => {
  expect(magic([8, "+", 2, "*", 10, "*", 100, "/", 10])).toEqual(208);
});

it("magic([2, '*', 3, '/', 2])", () => {
  expect(magic([2, "*", 3, "/", 2])).toEqual(3);
});
