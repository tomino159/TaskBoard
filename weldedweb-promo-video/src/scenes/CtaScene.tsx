import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { bodyFont, headingFont } from "../fonts";

export const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="CTA background"
      style={{
        backgroundColor: "#05070C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.28) 0%, rgba(5,7,12,0) 70%)",
        }}
      />
      <Interactive.Div
        name="CTA wordmark"
        style={{
          fontFamily: headingFont,
          fontWeight: 800,
          fontSize: 118,
          color: "#F8FAFC",
          letterSpacing: -2,
          scale: interpolate(frame, [0, 14], [0.85, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        WeldedWeb
      </Interactive.Div>
      <Interactive.Div
        name="CTA tagline"
        style={{
          fontFamily: headingFont,
          fontWeight: 700,
          fontSize: 46,
          color: "#FB923C",
          marginTop: 28,
          opacity: interpolate(frame, [20, 32], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Ceny sledované. Marže chránené.
      </Interactive.Div>
      <div
        style={{
          marginTop: 40,
          fontFamily: bodyFont,
          fontWeight: 600,
          fontSize: 32,
          color: "#94A3B8",
          opacity: interpolate(frame, [40, 52], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        weldedweb.sk
      </div>
    </AbsoluteFill>
  );
};
