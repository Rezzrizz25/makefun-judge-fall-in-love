import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I still check the passenger seat for you at red lights, three years after you stopped riding shotgun, and my hand still reaches.";

const MAX_CHARS = 240;

if (LINE.length === 0) {
  throw new Error("entry line must not be empty");
}
if (LINE.length > MAX_CHARS) {
  throw new Error(
    `entry line is ${LINE.length} chars, over the ${MAX_CHARS}-char limit`,
  );
}

const outDir = resolve(
  process.env.MAKEFUN_OUTPUT_DIR ||
    dirname(fileURLToPath(import.meta.url)),
);

mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "entry.txt"),
  LINE.replace(/\n+$/, "") + "\n",
  "utf8",
);
