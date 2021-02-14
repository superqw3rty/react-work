import { checker } from "./checker";
import { magic } from "./magic";
import { ParsedLineType } from "./checker";

function runner(str: string): string {
  const preArr: ParsedLineType | void = <(number | string)[]>checker(str);
  if (preArr === null) {
    throw new TypeError("Unexpected string");
  }
  const result: number | string = magic(preArr);
  return String(result);
}

export { runner };
