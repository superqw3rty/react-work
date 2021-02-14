const readline = require("readline");
import { runner } from "./runner";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<void> =>
  new Promise((resolve) => {
    rl.question("> ", (answer: string) => {
      const result = runner(answer);

      if (result) {
        console.log(`Result: ${result}`);
      }
      resolve();
    });
  });

async function calc(): Promise<null> {
  while (true) {
    await question();
  }
}

calc();
