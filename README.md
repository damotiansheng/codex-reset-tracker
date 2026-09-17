# Codex Reset Tracker

Unofficial tracker of OpenAI Codex usage-limit resets. Single-page Next.js app
deployed on Vercel.

- Latest reset countdown (revalidated hourly)
- Stats: total resets, average interval, longest wait, monthly pace
- Color-coded timeline of every tracked reset
- All announcements with type badges (regular / banked / note)
- Dynamic OG image at `/og`

Data is compiled from public announcements by [@thsottiaux](https://x.com/thsottiaux)
and stored in `lib/resets.ts`. To record a new reset, add an entry there and deploy.

Not affiliated with OpenAI.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub and import into Vercel, or run `vercel`.
