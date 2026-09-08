import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { bodyFont, headingFont } from "../fonts";

export const SpeedScene: React.FC = () => {
  const frame = useCurrentFrame();

  const barProgress = interpolate(frame, [4, 34], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const ms = Math.round(interpolate(frame, [4, 34], [900, 180], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  }));

  const captionOpacity = interpolate(frame, [40, 52], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      name="Speed background"
      style={{
        backgroundColor: "#05070C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 44,
      }}
    >
      <div
        style={{
          fontFamily: headingFont,
          fontWeight: 800,
          fontSize: 108,
          color: "#22D3EE",
        }}
      >
        {ms}ms
      </div>
      <div
        style={{
          width: 640,
          height: 20,
          borderRadius: 10,
          backgroundColor: "#0B1220",
          border: "1px solid rgba(148, 163, 184, 0.25)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${barProgress * 100}%`,
            height: "100%",
            backgroundColor: "#3B82F6",
            borderRadius: 10,
          }}
        />
      </div>
      <div
        style={{
          fontFamily: bodyFont,
          fontWeight: 600,
          fontSize: 30,
          color: "#94A3B8",
        }}
      >
        Average page load
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
        Blazing fast, by default.
      </div>
    </AbsoluteFill>
  );
};
