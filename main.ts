// Office Jokes entry for make.fun competition
// u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a
// Writes one single-line office joke to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I asked HR for a raise and they gave me a meditation app, so now I can calmly afford nothing.";

// The gate requires 1-199 characters, a single line, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error("joke fails the entry gate");
}

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JOKE, "utf8");
