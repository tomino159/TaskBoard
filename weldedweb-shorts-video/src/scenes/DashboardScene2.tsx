import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { BottomGlow } from "../components/GlowBackground";
import { BrowserMockupTilt } from "../components/BrowserMockupTilt";
import { headingFont } from "../fonts";

const points = [60, 52, 58, 40, 44, 30, 22];

export const DashboardScene2: React.FC = () => {
  const frame = useCurrentFrame();

  const pathLength = interpolate(frame, [10, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const width = 720;
  const height = 160;
  const step = width / (points.length - 1);
  const coords = points.map((p, i) => [i * step, height - (p / 60) * height]);
  const path = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");

  return (
    <AbsoluteFill
      name="Dashboard 2 background"
      style={{
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
      }}
    >
      <BottomGlow appearDurationInFrames={14} />
      <div
        style={{
          fontFamily: headingFont,
          fontWeight: 700,
          fontSize: 44,
          color: "#FFFFFF",
          textShadow: "0 0 20px rgba(255,255,255,0.3)",
          opacity: interpolate(frame, [0, 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Inteligentná Analýza Cien
      </div>
      <BrowserMockupTilt startFrame={4}>
        <div style={{ padding: 28, backgroundColor: "#0b0e1a", display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", gap: 16 }}>
            <div
              style={{
                flex: 1,
                borderRadius: 14,
                backgroundColor: "#141a2e",
                border: "1px solid rgba(199,210,254,0.1)",
                padding: 18,
              }}
            >
              <div style={{ fontFamily: headingFont, fontWeight: 600, fontSize: 14, color: "#94a3b8" }}>
                Cena konkurencie
              </div>
              <div style={{ fontFamily: headingFont, fontWeight: 800, fontSize: 30, color: "#fbbf24" }}>
                -18,3 %
              </div>
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: 14,
                backgroundColor: "#141a2e",
                border: "1px solid rgba(199,210,254,0.1)",
                padding: 18,
              }}
            >
              <div style={{ fontFamily: headingFont, fontWeight: 600, fontSize: 14, color: "#94a3b8" }}>
                Vaša pozícia
              </div>
              <div style={{ fontFamily: headingFont, fontWeight: 800, fontSize: 30, color: "#c7d2fe" }}>
                #2 z 8
              </div>
            </div>
          </div>
          <div
            style={{
              borderRadius: 14,
              backgroundColor: "#141a2e",
              border: "1px solid rgba(199,210,254,0.1)",
              padding: "20px 24px",
            }}
          >
            <svg width={width} height={height}>
              <path
                d={path}
                fill="none"
                stroke="#fbbf24"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={1400}
                strokeDashoffset={1400 * (1 - pathLength)}
              />
            </svg>
          </div>
        </div>
      </BrowserMockupTilt>
    </AbsoluteFill>
  );
};
