import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { bodyFont, headingFont } from "../fonts";

export const AutomationScene: React.FC = () => {
  const frame = useCurrentFrame();

  const ringScale = interpolate(frame, [0, 40], [1, 2.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const ringOpacity = interpolate(frame, [0, 40], [0.5, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const statScale = interpolate(frame, [0, 12], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.spring({ damping: 200 }),
    output: "perceptual-scale",
  });

  const captionOpacity = interpolate(frame, [30, 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      name="Automation background"
      style={{
        backgroundColor: "#05070C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 44,
      }}
    >
      <div style={{ position: "relative", width: 320, height: 320 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "3px solid #FB923C",
            scale: ringScale,
            opacity: ringOpacity,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 30,
            borderRadius: "50%",
            backgroundColor: "#0B1220",
            border: "1px solid rgba(148, 163, 184, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            scale: statScale,
          }}
        >
          <div
            style={{
              fontFamily: headingFont,
              fontWeight: 800,
              fontSize: 84,
              color: "#F97316",
            }}
          >
            24/7
          </div>
        </div>
      </div>
      <div
        style={{
          fontFamily: bodyFont,
          fontWeight: 600,
          fontSize: 30,
          color: "#94A3B8",
        }}
      >
        Nepretržite sleduje váš trh
      </div>
      <div
        style={{
          fontFamily: headingFont,
          fontWeight: 800,
          fontSize: 60,
          color: "#F8FAFC",
          opacity: captionOpacity,
        }}
      >
        Žiadna ručná práca.
      </div>
    </AbsoluteFill>
  );
};
