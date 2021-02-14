import { mathOperations, mathPriorities } from "./mathOperations";
import { ParsedLineType, isInt } from "./checker";

export function firstPriorities(
  arr: ParsedLineType
): ParsedLineType | number[] {
  const first: ParsedLineType = arr;
  const result = [];
  for (let i = 0; i < first.length; i++) {
    if (
      !isInt(first[i]) &&
      mathOperations.hasOwnProperty(first[i]) &&
      mathPriorities[first[i]] === 1
    ) {
      const math: number = mathOperations[first[i]](
        first[i - 1] as number,
        <number>first[i + 1]
      );
      if (math === NaN) {
        throw new TypeError("Unexpected string");
      }
      result.pop();
      result.push(math);
      first[i + 1] = math;
      i++;
    } else {
      result.push(first[i]);
    }
  }
  return result;
}

export function secondPriorities(arr: ParsedLineType | number[]): number {
  for (let i = 0; i < arr.length; i++) {
    if (!isInt(arr[i]) && mathOperations.hasOwnProperty(arr[i])) {
      const math: number = mathOperations[arr[i]](
        Number(arr[i - 1]),
        Number(arr[i + 1])
      );
      if (math === NaN) {
        throw new TypeError("Unexpected string");
      }
      arr.splice(0, 3);
      arr.unshift(math);
      i = 0;
    }
  }
  return Number(arr.join());
}
