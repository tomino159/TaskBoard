import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { bodyFont, headingFont } from "../fonts";

export const AlertScene: React.FC = () => {
  const frame = useCurrentFrame();

  const cardPop = interpolate(frame, [6, 20], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.8)),
  });
  const cardOpacity = interpolate(frame, [6, 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const bellShake =
    frame >= 0 && frame < 30
      ? Math.sin(frame * 1.6) * interpolate(frame, [0, 6, 30], [0, 12, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 0;

  const captionOpacity = interpolate(frame, [40, 52], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      name="Alert background"
      style={{
        backgroundColor: "#05070C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 44,
      }}
    >
      <div style={{ fontSize: 96, rotate: `${bellShake}deg` }}>🔔</div>
      <div
        style={{
          width: 760,
          borderRadius: 18,
          backgroundColor: "#0B1220",
          border: "1px solid #F97316",
          boxShadow: "0 30px 80px rgba(249, 115, 22, 0.25)",
          padding: "28px 36px",
          scale: cardPop,
          opacity: cardOpacity,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            fontFamily: bodyFont,
            fontWeight: 700,
            fontSize: 22,
            color: "#F97316",
          }}
        >
          CENOVÉ UPOZORNENIE
        </div>
        <div
          style={{
            fontFamily: headingFont,
            fontWeight: 700,
            fontSize: 32,
            color: "#F8FAFC",
          }}
        >
          rivalshop.io znížil cenu na 26,99 €
        </div>
      </div>
      <div
        style={{
          fontFamily: headingFont,
          fontWeight: 800,
          fontSize: 64,
          color: "#F8FAFC",
          opacity: captionOpacity,
        }}
      >
        Okamžité upozornenia. Bez omeškania.
      </div>
    </AbsoluteFill>
  );
};
