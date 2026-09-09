import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { headingFont, monoFont } from "../fonts";

export const PersistScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Persist background"
      style={{
        backgroundColor: "#0B1220",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 100,
        padding: "0 160px",
      }}
    >
      <div
        style={{
          width: 280,
          height: 340,
          borderRadius: 24,
          backgroundColor: "#0F172A",
          border: "1px solid rgba(52, 211, 153, 0.4)",
          boxShadow: "0 30px 80px rgba(52, 211, 153, 0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          scale: interpolate(frame, [0, 20], [0.85, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
          }),
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{ fontSize: 84 }}>📄</div>
        <div
          style={{
            fontFamily: monoFont,
            fontSize: 26,
            color: "#34D399",
          }}
        >
          taskboard.json
        </div>
        <div
          style={{
            fontFamily: monoFont,
            fontSize: 18,
            color: "#94A3B8",
            opacity: interpolate(frame, [30, 45], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          ✔ saved
        </div>
      </div>
      <div style={{ maxWidth: 640 }}>
        <Interactive.Div
          name="Persist headline"
          style={{
            fontFamily: headingFont,
            fontWeight: 700,
            fontSize: 64,
            color: "#F8FAFC",
            lineHeight: 1.25,
            opacity: interpolate(frame, [10, 30], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(frame, [10, 30], ["24px 0px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          Save and load your board anytime.
        </Interactive.Div>
        <Interactive.Div
          name="Persist subhead"
          style={{
            fontFamily: headingFont,
            fontWeight: 600,
            fontSize: 40,
            color: "#94A3B8",
            marginTop: 24,
            opacity: interpolate(frame, [40, 60], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          Plain JSON. Zero lock-in.
        </Interactive.Div>
      </div>
    </AbsoluteFill>
  );
};
