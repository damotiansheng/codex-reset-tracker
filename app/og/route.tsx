import { ImageResponse } from "next/og";
import { getStats } from "@/lib/resets";

export const runtime = "edge";

export function GET() {
  const s = getStats();
  const days = Math.floor(s.daysSinceLast);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#34d399",
              boxShadow: "0 0 24px #34d399",
              display: "flex",
            }}
          />
          <div
            style={{
              color: "#e7e7ea",
              fontSize: 30,
              fontWeight: 700,
              display: "flex",
            }}
          >
            Codex Reset Tracker
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#9b9ba4",
              fontSize: 26,
              letterSpacing: 4,
              display: "flex",
            }}
          >
            DAYS SINCE LAST RESET
          </div>
          <div
            style={{
              color: "#34d399",
              fontSize: 200,
              fontWeight: 700,
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            {`${days}`}
          </div>
        </div>

        <div style={{ display: "flex", gap: 48, color: "#9b9ba4", fontSize: 24 }}>
          <div style={{ display: "flex" }}>{`${s.total} resets`}</div>
          <div style={{ display: "flex" }}>{`avg every ${s.avgIntervalDays.toFixed(1)}d`}</div>
          <div style={{ display: "flex" }}>{`longest wait ${s.longestGapDays.toFixed(1)}d`}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
