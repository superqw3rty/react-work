import { ParsedLineType } from "./checker";
import { doBrackets, findBrackets } from "./doBrackets";
import { firstPriorities, secondPriorities } from "./math";

const magic = function (arr: ParsedLineType): number {
  const brackets: number[] | [] = findBrackets(arr);
  if (brackets.length > 0) {
    const withoutBrackets = doBrackets(arr, brackets);
    const first = firstPriorities(withoutBrackets);
    const result = secondPriorities(first);
    return result;
  }

  const first: ParsedLineType | number = firstPriorities(arr);
  const second = secondPriorities(first);
  return second;
};

export { magic };
