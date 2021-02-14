import { runner } from "./runner";

test("runner('8 + 2 * 10 - 100 / 10')", () => {
  expect(runner("8 + 2 * 10 - 100 / 10")).toEqual("18");
});

it("runner('2 + 2 * 4')", () => {
  expect(runner("2 + 2 * 4")).toEqual("10");
});

it("runner(8 + 2 * 10 * 100 / 10)", () => {
  expect(runner("8 + 2 * 10 * 100 / 10")).toEqual("208");
});
it("runner('')", () => {
  expect(runner("")).toEqual("0");
});

describe("Parser invalid cases", () => {
  it("runner(['2, *, 3, /, 2')", () => {
    expect(() => runner("2, *, 3, /, 2")).toThrow(
      TypeError("Unexpected string")
    );
  });
});
