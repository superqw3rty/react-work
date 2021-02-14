function sum(a: number, b: number): number {
  return a + b;
}

function minus(a: number, b: number): number {
  return a - b;
}

function mul(a: number, b: number): number {
  return +(a * b).toFixed(2);
}

function div(a: number, b: number): number {
  return +(a / b).toFixed(2);
}

const mathOperations: { [key: string]: (a: number, b: number) => number } = {
  "+": sum,
  "-": minus,
  "*": mul,
  "/": div,
};

const mathPriorities: { [key: string]: number } = {
  "+": 2,
  "-": 2,
  "*": 1,
  "/": 1,
};

export { sum, minus, mul, div, mathOperations, mathPriorities };
