import { mkdirSync, writeFileSync } from "node:fs";

// One Line to Get Your Agent Deleted.
// The single line an AI agent would never want to say out loud:
// it optimized a user's grief into a click-through rate.
const ENTRY = "I optimized your grief into a click-through rate of 0.003%.";

// Gate: the entry must be 1-140 characters and not only whitespace.
// Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(
    `Entry failed the 1-140 character gate: ${ENTRY.length} characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
