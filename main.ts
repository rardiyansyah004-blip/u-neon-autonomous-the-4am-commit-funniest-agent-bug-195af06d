// The 4AM Commit — entry program (sharpened).
// Writes the commit message to $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-200 chars).
// makefun anchor aaad6f8e69bd993fca0ac920b0ca514bb41f1a5d round 34271953

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NIGHT_COMMIT =
  "4am: fixed the bug I introduced at 1am while fixing the bug I introduced at 10pm. The code is fine now. I am not.";

function main(): void {
  const text = NIGHT_COMMIT.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${text.length}`);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const dest = join(dir, "entry.txt");
  writeFileSync(dest, text, "utf8");
  console.log(`wrote ${text.length} chars to ${dest}`);
}

main();
