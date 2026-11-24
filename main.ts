import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: corporate jargon redefined by the staffing reality
// everyone in an office recognises — the setup names the buzzword, the
// punchline pays it off with the colleague who left and was never replaced.
const JOKE =
  "Our boss calls it 'synergy' when two people do the job of one person who quit and was never replaced.";

// The gate only accepts 1–200 characters, so refuse to write anything
// outside that range instead of silently shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
