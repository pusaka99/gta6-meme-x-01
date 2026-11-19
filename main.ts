// Leonida Driver License — GTA 6 Meme X entry program.
//
// Copies POST.json from the repository root into the output directory.
// That is all it does: no network, no clock, no files outside the repo.
//
// Environment:
//   MAKEFUN_BOT_DIR     — repository root (default: /bot)
//   MAKEFUN_OUTPUT_DIR  — output directory (default: /output)

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const parsed = JSON.parse(readFileSync(source, "utf8"));

if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
  throw new Error("POST.json must be a JSON object with a string 'url'");
}

// The copy is byte-for-byte, so two runs always produce identical output.
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "POST.json"));
