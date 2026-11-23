import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I still check the passenger seat for you at red lights, three years after you stopped riding shotgun, and my hand still reaches.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  dirname(fileURLToPath(import.meta.url));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
