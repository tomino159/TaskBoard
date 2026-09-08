import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BottomGlow } from "../components/GlowBackground";
import { BrowserMockupTilt } from "../components/BrowserMockupTilt";
import { ParticleField } from "../components/ParticleField";
import { CameraPunchIn } from "../components/CameraPunchIn";
import { CursorDot, useCountUp } from "../components/AnimatedNumber";
import { headingFont } from "../fonts";

const products = [
  { name: "Bezdrôtové slúchadlá X200", price: "49,90 €" },
  { name: "Smart hodinky Pulse", price: "89,00 €" },
  { name: "USB-C nabíjačka 65W", price: "24,50 €" },
];

export const DashboardScene1: React.FC = () => {
  const frame = useCurrentFrame();
  const count = Math.round(useCountUp(0, 47, 10, 22));
  const float = Math.sin(frame * 0.09) * 6;
  const bannerGlow = 0.4 + 0.25 * Math.sin(frame * 0.15);

  return (
    <AbsoluteFill
      name="Dashboard 1 background"
      style={{ backgroundColor: "#000000" }}
    >
      <CameraPunchIn from={1} to={1.05}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
          }}
        >
          <BottomGlow appearDurationInFrames={14} />
          <ParticleField count={16} seedOffset={400} />
          <div
            style={{
              fontFamily: headingFont,
              fontWeight: 700,
              fontSize: 48,
              color: "#FFFFFF",
              textShadow: "0 0 20px rgba(255,255,255,0.3)",
              opacity: interpolate(frame, [0, 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            Prehľadný Dashboard
          </div>
          <div style={{ position: "relative", translate: `0px ${float}px` }}>
            <BrowserMockupTilt startFrame={4}>
              <div
                style={{ display: "flex", height: 480, backgroundColor: "#0b0e1a" }}
              >
                <div
                  style={{
                    width: 140,
                    backgroundColor: "#0a0c16",
                    borderRight: "1px solid rgba(199,210,254,0.12)",
                    padding: "24px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  {["Prehľad", "Produkty", "Konkurenti", "Nastavenia"].map(
                    (item, i) => (
                      <div
                        key={item}
                        style={{
                          fontFamily: headingFont,
                          fontWeight: 600,
                          fontSize: 15,
                          color: i === 1 ? "#c7d2fe" : "#6b7280",
                        }}
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      height: 90,
                      borderRadius: 14,
                      background:
                        "linear-gradient(120deg, #f472b6 0%, #a78bfa 50%, #4d6bff 100%)",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: 24,
                      fontFamily: headingFont,
                      fontWeight: 700,
                      fontSize: 20,
                      color: "#FFFFFF",
                      boxShadow: `0 0 ${20 + bannerGlow * 20}px rgba(167,139,250,${bannerGlow})`,
                    }}
                  >
                    Sledovaných produktov: {count}
                  </div>
                  {products.map((p) => (
                    <div
                      key={p.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "14px 18px",
                        borderRadius: 10,
                        backgroundColor: "#141a2e",
                        border: "1px solid rgba(199,210,254,0.1)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: headingFont,
                          fontWeight: 600,
                          fontSize: 16,
                          color: "#e5e7eb",
                        }}
                      >
                        {p.name}
                      </div>
                      <div
                        style={{
                          fontFamily: headingFont,
                          fontWeight: 700,
                          fontSize: 16,
                          color: "#c7d2fe",
                        }}
                      >
                        {p.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <CursorDot x={640} y={220} startFrame={22} clickFrame={34} />
            </BrowserMockupTilt>
          </div>
        </AbsoluteFill>
      </CameraPunchIn>
    </AbsoluteFill>
  );
};
