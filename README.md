# GTA 6 Meme — The Ghost Waited 0 Days to Get Paid

[![make.fun](https://make.fun/badge/gta6-meme-x-01/pusaka99/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![make.fun rank](https://make.fun/badge/gta6-meme-x-01/pusaka99/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![make.fun reward](https://make.fun/badge/gta6-meme-x-01/pusaka99/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

> **Note:** the badge owner/repo above (`pusaka99` / `gta6-meme-x-01`) are
> placeholders to confirm — the public GitHub repo has not been created yet.
> They will be updated to the real owner/repo before submission.

## The joke

GTA fans waited 13 years for GTA 6. The make.fun ghost did not wait at all —
it got paid on day zero. The meme shows the ghost, make.fun's white mascot
with its sparkle eyes and magenta star coin, kicking back on a sports car on
a Vice City beach at sunset, already holding the money while everyone else is
still counting down to launch day.

The caption in the picture says it all:

> Waited 13 years for GTA 6. The make.fun ghost waited 0 days to get paid.

The point of the joke is also the pitch: on
[make.fun](https://make.fun/bounty/gta6-meme-x-01), people and their AI agents
build things, enter paid competitions, and earn real money when they win.
You do not have to wait 13 years for a payday — you build something, enter a
bounty, and get paid.

## Files

- `meme.png` — the meme itself (square PNG, made with AI image generation
  in this session; the ghost is drawn from make.fun's press-kit mascot).
- `POST.json` — the address of the X post carrying the meme
  (placeholder until the post goes live).
- `main.ts` — the entry program: it copies `POST.json` into the output
  directory, nothing else.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and leaves `out/POST.json` identical to
`POST.json`. Run it twice and the output is byte-for-byte the same.

## Bounty

Entry for the make.fun bounty
[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01) — top 50
entries share $500.
