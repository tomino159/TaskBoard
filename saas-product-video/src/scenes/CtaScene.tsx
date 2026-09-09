import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { headingFont, monoFont } from "../fonts";

export const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="CTA background"
      style={{
        backgroundColor: "#0B1220",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Interactive.Div
        name="CTA wordmark"
        style={{
          fontFamily: headingFont,
          fontWeight: 800,
          fontSize: 104,
          color: "#F8FAFC",
          letterSpacing: -2,
          opacity: interpolate(frame, [0, 15], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        TaskBoard
      </Interactive.Div>
      <div
        style={{
          marginTop: 44,
          fontFamily: monoFont,
          fontSize: 30,
          color: "#CBD5E1",
          backgroundColor: "#0F172A",
          border: "1px solid rgba(148, 163, 184, 0.25)",
          borderRadius: 16,
          padding: "28px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          opacity: interpolate(frame, [20, 35], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div>
          <span style={{ color: "#34D399" }}>$</span> git clone
          https://github.com/tomino159/TaskBoard.git
        </div>
        <div>
          <span style={{ color: "#34D399" }}>$</span> cd TaskBoard &amp;&amp;
          dotnet run
        </div>
      </div>
      <Interactive.Div
        name="CTA tagline"
        style={{
          fontFamily: headingFont,
          fontWeight: 600,
          fontSize: 36,
          color: "#94A3B8",
          marginTop: 48,
          opacity: interpolate(frame, [55, 75], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Open source. Built with C#.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
