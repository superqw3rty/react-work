import { mathOperations } from "./mathOperations";
import { brackets } from "./doBrackets";

export function isInt(i: number | string): boolean {
  return !isNaN(Number(i));
}

export type ParsedLineType = (number | string)[];
export type Simple = number | string;

export function bracketsCheck(arr: ParsedLineType): boolean {
  let openBracket = 0;
  const bracketsStack: number[] = [];
  let jCount = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === brackets[0]) {
      bracketsStack.push(i);
      openBracket++;
      if (arr[i + 3] === brackets[1]) {
        return false;
      }
      for (let j = jCount; j > 0; j--) {
        jCount--;
        if (arr[j] === brackets[1]) {
          openBracket--;
          bracketsStack.push(j);
          break;
        }
      }
    }
  }
  while (bracketsStack.length > 1) {
    for (let i = 0; i < bracketsStack.length; i++) {
      const next = bracketsStack[i + 1];
      const item = bracketsStack[i];
      const diff = next - item;
      const mod = diff % 2;
      if (mod !== 0) {
        return false;
      } else {
        bracketsStack.splice(0, 2);
      }
    }
  }
  return bracketsStack.length > 0 && openBracket === 0 ? false : true;
}

export function checker(str: string): ParsedLineType | void {
  const stack = str.split(" ");
  if (bracketsCheck(stack)) {
    return stack.reduce<ParsedLineType>((acc, item, i) => {
      const prevItem = stack[i - 1];
      if (!isInt(prevItem) && isInt(item)) {
        acc.push(+item as number);
      } else if (
        (isInt(prevItem) &&
          !isInt(item) &&
          mathOperations.hasOwnProperty(item)) ||
        item === brackets[0] ||
        item === brackets[1]
      ) {
        acc.push(item);
      } else if (
        !isInt(item) &&
        (prevItem === brackets[0] || prevItem === brackets[1])
      ) {
        acc.push(item);
      } else {
        throw new TypeError("Unexpected string");
      }
      return acc;
    }, []);
  } else {
    throw new TypeError("Unexpected string");
  }
}
