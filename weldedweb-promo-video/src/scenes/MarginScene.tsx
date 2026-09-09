import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { bodyFont, headingFont } from "../fonts";

export const MarginScene: React.FC = () => {
  const frame = useCurrentFrame();

  const badHeight = interpolate(frame, [10, 34], [220, 90], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const goodHeight = interpolate(frame, [10, 34], [220, 210], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const tagOpacity = interpolate(frame, [36, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const captionOpacity = interpolate(frame, [50, 62], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      name="Margin background"
      style={{
        backgroundColor: "#05070C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 48,
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
        Ochráňte svoju maržu.
      </div>
      <div style={{ display: "flex", gap: 80, alignItems: "flex-end" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 140,
              height: badHeight,
              backgroundColor: "#F87171",
              borderRadius: 12,
            }}
          />
          <div
            style={{
              fontFamily: bodyFont,
              fontWeight: 600,
              fontSize: 24,
              color: "#94A3B8",
              textAlign: "center",
            }}
          >
            Bez zásahu
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 140,
              height: goodHeight,
              backgroundColor: "#4ADE80",
              borderRadius: 12,
            }}
          />
          <div
            style={{
              fontFamily: bodyFont,
              fontWeight: 600,
              fontSize: 24,
              color: "#94A3B8",
              textAlign: "center",
            }}
          >
            S WeldedWeb
          </div>
        </div>
      </div>
      <div
        style={{
          fontFamily: bodyFont,
          fontWeight: 700,
          fontSize: 28,
          color: "#4ADE80",
          opacity: tagOpacity,
        }}
      >
        Odporúčaná cena: 28,49 € (+1,50 € marža)
      </div>
      <div
        style={{
          fontFamily: headingFont,
          fontWeight: 800,
          fontSize: 56,
          color: "#F8FAFC",
          opacity: captionOpacity,
        }}
      >
        Automatická zmena ceny. Zostaňte ziskoví.
      </div>
    </AbsoluteFill>
  );
};
