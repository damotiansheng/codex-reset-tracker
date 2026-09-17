export type ResetType = "regular" | "banked" | "none";

export interface ResetEvent {
  /** UTC ISO timestamp of the announcement */
  at: string;
  type: ResetType;
  /** URL of the original X post */
  url: string;
  /** Short excerpt of the original announcement */
  text: string;
}

export const SOURCE_HANDLE = "@thsottiaux";
export const SOURCE_PROFILE_URL = "https://x.com/thsottiaux";

/**
 * Compiled from public usage-limit reset announcements by an OpenAI engineer.
 * Times are UTC. Types: regular = standard reset, banked = banked/partial
 * credit, none = follow-up note without a fresh reset.
 */
export const resets: ResetEvent[] = [
  {
    at: "2026-09-12T08:09:00Z",
    url: "https://x.com/thsottiaux/status/2098685367058612394",
    type: "regular",
    text: "Reset all propagated. Sweet dreams.",
  },
  {
    at: "2026-09-08T01:56:00Z",
    url: "https://x.com/thsottiaux/status/2097174560412246215",
    type: "regular",
    text: "All reset for everyone. Enjoy the week with Astra.",
  },
  {
    at: "2026-09-05T00:39:00Z",
    url: "https://x.com/thsottiaux/status/2096035437299237298",
    type: "banked",
    text: "Beyond happy to have Astra rolled out ahead of schedule — full banked reset landing end of day for all Plus, Pro and Business users.",
  },
  {
    at: "2026-09-03T23:12:00Z",
    url: "https://x.com/thsottiaux/status/2095651088502591861",
    type: "banked",
    text: "One banked reset for every day you don't have access to Astra on your paid plan, starting today.",
  },
  {
    at: "2026-08-31T02:29:00Z",
    url: "https://x.com/thsottiaux/status/2094251180121854309",
    type: "regular",
    text: "25M active users. To celebrate, usage has been reset for all paid subscriptions of ChatGPT Work and Codex.",
  },
  {
    at: "2026-08-29T20:43:00Z",
    url: "https://x.com/thsottiaux/status/2093801758665715784",
    type: "regular",
    text: "Usage reset for all paid users, plus a long list of usage-drain fixes: compaction, memory workers, goals, automations, subagents and more.",
  },
  {
    at: "2026-08-27T16:35:00Z",
    url: "https://x.com/thsottiaux/status/2093014447833116908",
    type: "regular",
    text: "Never slept better and feeling reseted. Brand new usage for all ChatGPT Work and Codex users.",
  },
  {
    at: "2026-08-25T14:30:00Z",
    url: "https://x.com/thsottiaux/status/2092311059197808936",
    type: "none",
    text: "Ah yeah, forgot to say. (Follow-up note.)",
  },
  {
    at: "2026-08-24T00:46:00Z",
    url: "https://x.com/thsottiaux/status/2091688655828246890",
    type: "regular",
    text: "Good Sunday. Reset has been propagated, along with fixes for the usage issues raised the day before.",
  },
  {
    at: "2026-08-21T11:43:00Z",
    url: "https://x.com/thsottiaux/status/2090766694897619318",
    type: "banked",
    text: "20M active users. Every Codex and ChatGPT Work user gets a banked reset to celebrate.",
  },
  {
    at: "2026-08-13T01:01:00Z",
    url: "https://x.com/thsottiaux/status/2087706104814023111",
    type: "regular",
    text: "Crossed 15M. Enjoy a nice reset, landing in the next hour or so.",
  },
  {
    at: "2026-08-11T00:27:00Z",
    url: "https://x.com/thsottiaux/status/2086972802457063486",
    type: "regular",
    text: "Hi. It is done.",
  },
  {
    at: "2026-08-08T20:29:00Z",
    url: "https://x.com/thsottiaux/status/2086188036493344823",
    type: "regular",
    text: "GPT-5.6 Sol celebration — usage limits reset for all paid users of ChatGPT Work and Codex.",
  },
  {
    at: "2026-08-01T03:32:00Z",
    url: "https://x.com/thsottiaux/status/2083395449814229287",
    type: "regular",
    text: "To celebrate a week of efficiency (and 100,000 Luna threads): usage limits reset for Codex and ChatGPT Work.",
  },
  {
    at: "2026-07-29T04:09:00Z",
    url: "https://x.com/thsottiaux/status/2082317452755751098",
    type: "regular",
    text: "Usage limits reset for all users, together with an update on GPT-5.6 Sol usage limits burning faster than expected.",
  },
  {
    at: "2026-07-28T03:09:00Z",
    url: "https://x.com/thsottiaux/status/2081940052154933696",
    type: "regular",
    text: "Back at the laptop. Usage limits reset for all paid users of Codex and ChatGPT Work.",
  },
  {
    at: "2026-07-25T19:17:00Z",
    url: "https://x.com/thsottiaux/status/2081096447718723984",
    type: "regular",
    text: "After an almost-global overnight outage: we learn, we reset.",
  },
  {
    at: "2026-07-21T16:47:00Z",
    url: "https://x.com/thsottiaux/status/2079609157934886975",
    type: "regular",
    text: "10M! New day, new usage reset for paid users, landing in the next hour.",
  },
  {
    at: "2026-07-18T03:28:00Z",
    url: "https://x.com/thsottiaux/status/2078320950488297917",
    type: "regular",
    text: "Oops… did it again. Reset usage limits for all paid users.",
  },
  {
    at: "2026-07-16T04:14:00Z",
    url: "https://x.com/thsottiaux/status/2077607697487188198",
    type: "regular",
    text: "Hit 9M active users. Another reset for Codex and ChatGPT Work users.",
  },
  {
    at: "2026-07-14T19:34:00Z",
    url: "https://x.com/thsottiaux/status/2077114635308986427",
    type: "regular",
    text: "8M active users. Once again resetting the usage limits for all — and still no 5h rate limit.",
  },
  {
    at: "2026-07-13T18:29:00Z",
    url: "https://x.com/thsottiaux/status/2076735790567338203",
    type: "banked",
    text: "Thank you to the 7M active users — a banked reset has been added to everyone's account.",
  },
  {
    at: "2026-07-12T21:28:00Z",
    url: "https://x.com/thsottiaux/status/2076418567143408112",
    type: "banked",
    text: "Added a banked reset to 500k users of ChatGPT Work and Codex.",
  },
  {
    at: "2026-07-11T05:54:00Z",
    url: "https://x.com/thsottiaux/status/2075820987833274448",
    type: "regular",
    text: "Another usage limit reset for all users, landing over the next 30 minutes.",
  },
  {
    at: "2026-07-10T17:59:00Z",
    url: "https://x.com/thsottiaux/status/2075641131002700120",
    type: "regular",
    text: "Usage limits reset across all plans — and another one coming later in the day.",
  },
  {
    at: "2026-07-09T21:24:00Z",
    url: "https://x.com/thsottiaux/status/2075330198887940337",
    type: "regular",
    text: "Full reset of usage limits, propagating in the next hour.",
  },
  {
    at: "2026-06-29T23:39:00Z",
    url: "https://x.com/thsottiaux/status/2071740419030053227",
    type: "regular",
    text: "Full reset incoming plus one additional reset credited to your bank, while usage-drain reports are investigated.",
  },
  {
    at: "2026-06-28T23:54:00Z",
    url: "https://x.com/thsottiaux/status/2071381664853319742",
    type: "regular",
    text: "A hard reset for everyone, since some users had stacked up to three banked resets.",
  },
  {
    at: "2026-06-26T23:39:00Z",
    url: "https://x.com/thsottiaux/status/2070653282440405046",
    type: "regular",
    text: "A usage reset on the house for all Codex users while mitigations continue.",
  },
  {
    at: "2026-06-18T00:10:00Z",
    url: "https://x.com/thsottiaux/status/2067399435009622521",
    type: "banked",
    text: "A sneaky double reset: a full reset on us, plus one into the reset bank.",
  },
  {
    at: "2026-06-04T00:25:00Z",
    url: "https://x.com/thsottiaux/status/2062329981548802523",
    type: "regular",
    text: "After three small reliability incidents in 24 hours: usage limits reset across all paid plans.",
  },
  {
    at: "2026-05-31T15:25:00Z",
    url: "https://x.com/thsottiaux/status/2061106703446450392",
    type: "regular",
    text: "Usage limits reset for all paid subscriptions — back to 100% weekly and hourly limits.",
  },
  {
    at: "2026-05-23T20:14:00Z",
    url: "https://x.com/thsottiaux/status/2058280452851638313",
    type: "regular",
    text: "Root-caused a rolled-back optimization that hurt cache hit rates; limits reset for all accounts.",
  },
  {
    at: "2026-05-16T17:51:00Z",
    url: "https://x.com/thsottiaux/status/2055707616605835333",
    type: "regular",
    text: "Usage limits reset across all paid plans. Enjoy the weekend!",
  },
  {
    at: "2026-04-28T05:28:00Z",
    url: "https://x.com/thsottiaux/status/2048997818673537399",
    type: "regular",
    text: "Don't just reset rate limits for fun, it costs money… but the vibes are good. Limits reset for all paid plans.",
  },
  {
    at: "2026-04-20T23:15:00Z",
    url: "https://x.com/thsottiaux/status/2046367145588916687",
    type: "regular",
    text: "Codex incident mitigated in ~10 minutes. Rate limit reset incoming.",
  },
  {
    at: "2026-04-17T00:58:00Z",
    url: "https://x.com/thsottiaux/status/2044943514832871564",
    type: "regular",
    text: "For Codex's 1-year anniversary: Codex was allowed to reset its own rate limits across all plans.",
  },
  {
    at: "2026-04-09T17:51:00Z",
    url: "https://x.com/thsottiaux/status/2042299371602264319",
    type: "regular",
    text: "The $100 plan is here — and yes, limits are being reset again too.",
  },
  {
    at: "2026-04-07T23:13:00Z",
    url: "https://x.com/thsottiaux/status/2041655710346572085",
    type: "regular",
    text: "3M weekly users, up from 2M a month ago. Limits reset to celebrate.",
  },
  {
    at: "2026-04-01T07:48:00Z",
    url: "https://x.com/thsottiaux/status/2039248564967424483",
    type: "regular",
    text: "Dashboards showed more users hitting rate limits than expected, so limits were cautiously reset for all plans.",
  },
  {
    at: "2026-03-27T01:52:00Z",
    url: "https://x.com/thsottiaux/status/2037346989244096581",
    type: "regular",
    text: "Limits reset across all plans to let everyone experiment with the newly launched plugins.",
  },
  {
    at: "2026-03-11T05:38:00Z",
    url: "https://x.com/thsottiaux/status/2031605592352313567",
    type: "regular",
    text: "Codex is back and stable. Reset button pressed.",
  },
  {
    at: "2026-03-10T03:51:00Z",
    url: "https://x.com/thsottiaux/status/2031216405266481489",
    type: "regular",
    text: "Issue fully resolved and stable — which, you guessed it, means a rate limit reset.",
  },
  {
    at: "2026-03-08T02:42:00Z",
    url: "https://x.com/thsottiaux/status/2030474136024400173",
    type: "regular",
    text: "No evidence of a widespread drain, but limits reset for Plus & Pro while the investigation wraps up.",
  },
  {
    at: "2026-03-04T21:30:00Z",
    url: "https://x.com/thsottiaux/status/2029308599835738218",
    type: "regular",
    text: "A bug kept the 2X promotional limits from ~9% of Plus/Pro users. Fixed, with a reset to compensate.",
  },
  {
    at: "2026-03-03T01:50:00Z",
    url: "https://x.com/thsottiaux/status/2028649088594436225",
    type: "regular",
    text: "Codex is back up after a bad release. Team will reset rate limits — it's been a while.",
  },
  {
    at: "2025-12-25T08:01:00Z",
    url: "https://x.com/thsottiaux/status/2004100061933064395",
    type: "regular",
    text: "Holiday gift: rate limits reset, and limits lifted to 2X the usual until Jan 1.",
  },
  {
    at: "2025-12-19T22:01:00Z",
    url: "https://x.com/thsottiaux/status/2002137269134819610",
    type: "regular",
    text: "The usage tracking/billing system was rewritten; limits were reset in the process.",
  },
  {
    at: "2025-12-17T02:18:00Z",
    url: "https://x.com/thsottiaux/status/2001114683047317723",
    type: "regular",
    text: "Didn't need to do this in a while, but you know the drill. Everyone's usage limits reset.",
  },
  {
    at: "2025-12-02T22:49:00Z",
    url: "https://x.com/thsottiaux/status/1995988609896513743",
    type: "regular",
    text: "Limits reset for everyone as the fastest mitigation while the team works the underlying cause.",
  },
  {
    at: "2025-11-22T23:13:00Z",
    url: "https://x.com/thsottiaux/status/1992370994028388670",
    type: "regular",
    text: "Limits reset for all users to compensate for unusually high latencies in and near the US.",
  },
  {
    at: "2025-11-05T20:19:00Z",
    url: "https://x.com/thsottiaux/status/1986166501435711936",
    type: "regular",
    text: "Global outage resolved after ~45 minutes; rate limits reset.",
  },
  {
    at: "2025-09-17T04:02:00Z",
    url: "https://x.com/thsottiaux/status/1968163721034994139",
    type: "regular",
    text: "The very first one: limits reset for gpt-5-codex to make up for GPU-provisioning slowdowns.",
  },
];

export interface ResetStats {
  total: number;
  /** average interval in days between consecutive tracked events */
  avgIntervalDays: number;
  longestGapDays: number;
  longestGapFrom: Date;
  longestGapTo: Date;
  daysSinceLast: number;
  lastAt: Date;
  firstAt: Date;
}

export function getStats(now: Date = new Date()): ResetStats {
  const times = resets
    .map((r) => new Date(r.at).getTime())
    .sort((a, b) => a - b);
  const gaps: number[] = [];
  for (let i = 1; i < times.length; i++) {
    gaps.push((times[i] - times[i - 1]) / 86_400_000);
  }
  const last = times[times.length - 1];
  let longestIdx = 0;
  for (let i = 1; i < gaps.length; i++) {
    if (gaps[i] > gaps[longestIdx]) longestIdx = i;
  }
  return {
    total: resets.length,
    avgIntervalDays: gaps.reduce((a, b) => a + b, 0) / gaps.length,
    longestGapDays: gaps[longestIdx],
    longestGapFrom: new Date(times[longestIdx]),
    longestGapTo: new Date(times[longestIdx + 1]),
    daysSinceLast: Math.max(0, (now.getTime() - last) / 86_400_000),
    lastAt: new Date(last),
    firstAt: new Date(times[0]),
  };
}

export function formatDays(days: number): string {
  if (days < 1) return `${Math.round(days * 24)}h`;
  return `${days.toFixed(1)}d`;
}
