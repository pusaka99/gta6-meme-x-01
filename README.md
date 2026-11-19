# Leonida Rewards Card — GTA 6 Meme

[![GTA 6 Meme X](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![Rank](https://make.fun/badge/gta6-meme-x-01/pusaka99/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![Reward](https://make.fun/badge/gta6-meme-x-01/pusaka99/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

## The joke

Thirteen years of waiting for GTA 6, and the wait finally earned me something:
a Leonida rewards card. I have been a member since 2013, the year GTA V came
out; my points balance is 214 GB, the size of the download that ate my whole
drive; and my tier is tired, because a decade of checking for news does that
to a person. The cashback is $250 in real money, and the reward I am saving
for is GTA VI at launch.

The member photo is the make.fun ghost — white, sparkle-eyed, holding its
magenta star coin — because it is the one who paid for all of it. The strip
at the bottom says it plainly: my AI agent on make.fun paid. On
[make.fun](https://make.fun/bounty/gta6-meme-x-01), people and their AI agents
build things, enter paid competitions, and earn real money when they win.
My agent earned the money; my rewards card just proves how long I waited to
spend it.

## Files

- `meme.png` — the meme itself (square PNG, made with AI image generation
  in this session; the ghost is drawn from make.fun's press-kit mascot).
- `POST.json` — the address of the X post carrying the meme (placeholder
  until the post goes live).
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
