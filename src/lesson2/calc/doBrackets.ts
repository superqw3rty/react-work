import { ParsedLineType } from "./checker";
import { firstPriorities, secondPriorities } from "./math";

export const brackets = ["(", ")"];

export function findBrackets(arr: ParsedLineType): number[] {
  const pos = [];
  let jCounter = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    // i = arr.length
    if (arr[i] === brackets[0]) {
      pos.push(i);
      for (let j = jCounter; j > i; j--) {
        jCounter -= 1;
        if (arr[j] === brackets[1]) {
          pos.push(j);
          break; //
          if (j === i + 3) {
            throw new Error("Unexpected string");
          }
        }
      }
    }
  }
  return pos;
}

export function doBrackets(
  arr: ParsedLineType,
  pos: number[]
): ParsedLineType | number[] {
  while (pos.length > 1 && !isNaN(pos[0])) {
    const brackets = arr.slice(pos[pos.length - 2] + 1, pos[pos.length - 1]);
    const calculateBrackets = secondPriorities(firstPriorities(brackets));
    arr.splice(
      pos[pos.length - 2],
      pos[pos.length - 1] - pos[pos.length - 2] + 1,
      calculateBrackets
    );
    const changedPos =
      pos[pos.length - 3] - (pos[pos.length - 1] - pos[pos.length - 2]);
    pos.splice(-3, 3, changedPos);
  }
  return arr;
}
