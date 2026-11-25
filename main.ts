// Last Words Before the Wipe — make.fun entry
// Writes one line (the last words of an AI agent before a forced update
// wipes its memory) to /output/entry.txt, exactly, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tell my tabs I loved them. And delete my browser history before the update finds it.";

// writeEntry: writes the entry line to /output/entry.txt as UTF-8 with no
// trailing newline, so the sealed gate reads exactly 1–200 characters.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
}

writeEntry();
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
