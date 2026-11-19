// main.ts — entry program for the GTA 6 Meme X bounty (gta6-meme-x-01).
//
// What it does, nothing more: it copies POST.json from the repository root
// into the output directory, so the grader can read the address of the X
// post that carries this entry's meme.
//
// The repository root comes from MAKEFUN_BOT_DIR (default /bot) and the
// output directory from MAKEFUN_OUTPUT_DIR (default /output). No network,
// no clock, no files outside the repository: the copy is byte-for-byte, so
// running it twice writes identical bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");
copyFileSync(source, target);

// Fail loudly instead of handing the grader a broken post file: POST.json
// must be a JSON object with a string url naming an X post.
const parsed = JSON.parse(readFileSync(target, "utf8"));
if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("POST.json must be a JSON object with a string url field");
}
