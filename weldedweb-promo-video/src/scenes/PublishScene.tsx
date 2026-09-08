import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { bodyFont, headingFont } from "../fonts";

export const PublishScene: React.FC = () => {
  const frame = useCurrentFrame();

  const buttonScale = interpolate(frame, [0, 8, 16], [1, 0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const ringScale = interpolate(frame, [8, 34], [0.3, 2.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const ringOpacity = interpolate(frame, [8, 34], [0.6, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const urlOpacity = interpolate(frame, [26, 38], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const captionOpacity = interpolate(frame, [42, 54], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      name="Publish background"
      style={{
        backgroundColor: "#05070C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 48,
      }}
    >
      <div style={{ position: "relative", width: 260, height: 260 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "3px solid #22D3EE",
            scale: ringScale,
            opacity: ringOpacity,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 40,
            borderRadius: "50%",
            backgroundColor: "#2563EB",
            scale: buttonScale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: headingFont,
            fontWeight: 800,
            fontSize: 32,
            color: "#F8FAFC",
          }}
        >
          Publish
        </div>
      </div>
      <div
        style={{
          fontFamily: bodyFont,
          fontWeight: 600,
          fontSize: 34,
          color: "#4ADE80",
          opacity: urlOpacity,
        }}
      >
        ● live at weldedweb.sk/your-site
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
        Live in seconds.
      </div>
    </AbsoluteFill>
  );
};
