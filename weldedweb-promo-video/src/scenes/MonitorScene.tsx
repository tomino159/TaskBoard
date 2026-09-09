import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { DashboardCard } from "../components/DashboardCard";
import { bodyFont, headingFont } from "../fonts";

const rows = [
  { name: "Váš obchod", price: "29,99 €", highlight: true },
  { name: "competitor-a.com", price: "31,49 €", highlight: false },
  { name: "rivalshop.io", price: "28,99 €", highlight: false },
  { name: "market-place.com", price: "30,00 €", highlight: false },
];

export const MonitorScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Monitor background"
      style={{
        backgroundColor: "#05070C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      <div
        style={{
          fontFamily: headingFont,
          fontWeight: 800,
          fontSize: 68,
          color: "#F8FAFC",
          opacity: interpolate(frame, [0, 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Ceny sledované 24/7.
      </div>
      <DashboardCard title="Prehľad konkurenčnej inteligencie">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {rows.map((row, i) => {
            const start = 14 + i * 10;
            const slide = interpolate(frame, [start, start + 14], [40, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            });
            const opacity = interpolate(frame, [start, start + 10], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={row.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "18px 24px",
                  borderRadius: 12,
                  backgroundColor: row.highlight ? "#EA580C" : "#050710",
                  border: row.highlight
                    ? "1px solid #FB923C"
                    : "1px solid rgba(148, 163, 184, 0.15)",
                  translate: `${slide}px 0px`,
                  opacity,
                }}
              >
                <div
                  style={{
                    fontFamily: bodyFont,
                    fontWeight: 600,
                    fontSize: 26,
                    color: row.highlight ? "#F8FAFC" : "#CBD5E1",
                  }}
                >
                  {row.name}
                </div>
                <div
                  style={{
                    fontFamily: headingFont,
                    fontWeight: 700,
                    fontSize: 28,
                    color: row.highlight ? "#F8FAFC" : "#94A3B8",
                  }}
                >
                  {row.price}
                </div>
              </div>
            );
          })}
        </div>
      </DashboardCard>
    </AbsoluteFill>
  );
};
