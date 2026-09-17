import {
  resets,
  getStats,
  formatDays,
  SOURCE_HANDLE,
  SOURCE_PROFILE_URL,
  type ResetType,
} from "@/lib/resets";

// Re-render hourly so "days since last reset" stays fresh.
export const revalidate = 3600;

const TYPE_LABEL: Record<ResetType, string> = {
  regular: "Reset",
  banked: "Banked",
  none: "Note",
};

function fmtDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function fmtTime(d: Date): string {
  return `${d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  })} UTC`;
}

function fmtShort(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}

function relative(d: Date, now: Date): string {
  const days = Math.max(0, (now.getTime() - d.getTime()) / 86_400_000);
  if (days < 1) return "today";
  if (days < 2) return "yesterday";
  if (days < 7) return `${Math.floor(days)} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} week${days < 14 ? "" : "s"} ago`;
  if (days < 365) return `${Math.floor(days / 30)} month${days < 60 ? "" : "s"} ago`;
  return `${Math.floor(days / 365)} year${days < 730 ? "" : "s"} ago`;
}

export default function Home() {
  const now = new Date();
  const s = getStats(now);
  const pressure = Math.min(100, (s.daysSinceLast / s.avgIntervalDays) * 100);

  const first = s.firstAt.getTime();
  const span = Math.max(now.getTime() - first, 1);
  const posOf = (t: number) => ((t - first) / span) * 100;
  const ticks = resets.map((r) => {
    const t = new Date(r.at).getTime();
    return { ...r, leftPct: posOf(t) };
  });

  // quarter-start labels between the first reset and now
  const quarterLabels: { text: string; leftPct: number }[] = [];
  for (let q = 0; ; q++) {
    const d = new Date(Date.UTC(2026, q * 3, 1));
    if (d.getTime() > now.getTime()) break;
    if (d.getTime() > first) {
      quarterLabels.push({
        text: d.toLocaleDateString("en-US", { month: "short", year: "2-digit", timeZone: "UTC" }),
        leftPct: posOf(d.getTime()),
      });
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a className="brand" href="/">
            <span className="brand-dot" />
            Codex Reset Tracker
          </a>
          <nav>
            <a href="#history">History</a>
            <a href="#announcements">Announcements</a>
            <a href={SOURCE_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              {SOURCE_HANDLE}
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* hero */}
        <section className="hero container">
          <p className="hero-kicker">Days since the last Codex usage-limit reset</p>
          <div className="hero-countdown">
            {Math.floor(s.daysSinceLast)}
            <span className="hero-unit">days</span>
          </div>
          <p className="hero-sub">
            Last reset on <strong>{fmtDate(s.lastAt)}</strong> at {fmtTime(s.lastAt)} —{" "}
            {relative(s.lastAt, now)}. On average the button gets pressed every{" "}
            <strong>{formatDays(s.avgIntervalDays)}</strong>.
          </p>
          <div className="meter-wrap">
            <div className="meter">
              <div className="meter-fill" style={{ width: `${pressure}%` }} />
            </div>
            <div className="meter-labels">
              <span>reset</span>
              <span>avg interval {formatDays(s.avgIntervalDays)}</span>
              <span>overdue</span>
            </div>
          </div>
        </section>

        {/* stats */}
        <section className="container stats">
          <div className="stat">
            <div className="stat-label">Tracked resets</div>
            <div className="stat-value">{s.total}</div>
            <div className="stat-note">since Sep 17, 2025</div>
          </div>
          <div className="stat">
            <div className="stat-label">Avg. interval</div>
            <div className="stat-value">{formatDays(s.avgIntervalDays)}</div>
            <div className="stat-note">between resets</div>
          </div>
          <div className="stat">
            <div className="stat-label">Longest wait</div>
            <div className="stat-value">{formatDays(s.longestGapDays)}</div>
            <div className="stat-note">
              {fmtShort(s.longestGapFrom)} → {fmtShort(s.longestGapTo)}
            </div>
          </div>
          <div className="stat">
            <div className="stat-label">Resets / month</div>
            <div className="stat-value">{(30 / s.avgIntervalDays).toFixed(1)}</div>
            <div className="stat-note">current pace</div>
          </div>
        </section>

        {/* timeline */}
        <section className="section container" id="history">
          <h2 className="section-title">Reset timeline</h2>
          <p className="section-sub">
            Every tracked reset since the first one in September 2025. Gaps tell their own story.
          </p>
          <div className="timeline-box">
            <div className="timeline">
              <div className="timeline-line" />
              {ticks.map((t) => (
                <div
                  key={t.at}
                  className={`tick tick--${t.type}`}
                  style={{ left: `${t.leftPct}%` }}
                  title={`${fmtDate(new Date(t.at))} — ${TYPE_LABEL[t.type]}`}
                />
              ))}
              <div className="tick tick--now" style={{ left: "100%" }} title="Now" />
            </div>
            <div className="timeline-labels">
              <span style={{ left: 0 }}>
                {s.firstAt.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </span>
              {quarterLabels.map((q) => (
                <span
                  key={q.text}
                  style={{ left: `${q.leftPct}%`, transform: "translateX(-50%)" }}
                >
                  {q.text}
                </span>
              ))}
              <span style={{ right: 0 }}>Now</span>
            </div>
            <div className="legend">
              <span>
                <i style={{ background: "var(--accent)" }} /> Regular reset
              </span>
              <span>
                <i style={{ background: "var(--banked)" }} /> Banked reset
              </span>
              <span>
                <i style={{ background: "var(--none)" }} /> Note, no fresh reset
              </span>
            </div>
          </div>
        </section>

        {/* announcements */}
        <section className="section container" id="announcements">
          <h2 className="section-title">All {s.total} announcements</h2>
          <p className="section-sub">
            Paraphrased highlights, newest first. Original posts live on {SOURCE_HANDLE}&apos;s
            timeline.
          </p>
          <div className="event-list">
            {resets.map((r, i) => {
              const d = new Date(r.at);
              return (
                <article className="event" key={r.at}>
                  <div className="event-num">#{s.total - i}</div>
                  <div>
                    <div className="event-meta">
                      <span className="event-date">
                        {fmtDate(d)} · {fmtTime(d)}
                      </span>
                      <span className={`badge badge--${r.type}`}>{TYPE_LABEL[r.type]}</span>
                      <span className="event-relative">{relative(d, now)}</span>
                    </div>
                    <p className="event-text">{r.text}</p>
                    <a
                      className="event-link"
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on X →
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            Unofficial fan project — not affiliated with or endorsed by OpenAI. Reset times are
            compiled from public announcements by{" "}
            <a href={SOURCE_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              {SOURCE_HANDLE}
            </a>
            .
          </p>
          <p>Numbers are computed from the tracked list above and refresh hourly.</p>
        </div>
      </footer>
    </>
  );
}
