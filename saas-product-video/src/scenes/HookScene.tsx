import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { headingFont, monoFont } from "../fonts";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cursorOn = Math.floor(frame / 15) % 2 === 0;

  return (
    <AbsoluteFill
      name="Hook background"
      style={{
        backgroundColor: "#0B1220",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontFamily: monoFont,
          fontSize: 32,
          color: "#34D399",
          marginBottom: 28,
        }}
      >
        <span>$</span>
        <span>dotnet run</span>
        <span style={{ opacity: cursorOn ? 1 : 0 }}>▍</span>
      </div>
      <Interactive.Div
        name="Hook headline"
        style={{
          fontFamily: headingFont,
          fontWeight: 800,
          fontSize: 148,
          color: "#F8FAFC",
          letterSpacing: -3,
          scale: interpolate(frame, [0, 0.6 * fps], [0.9, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 200 }),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        TaskBoard
      </Interactive.Div>
      <Interactive.Div
        name="Hook tagline"
        style={{
          fontFamily: headingFont,
          fontWeight: 600,
          fontSize: 44,
          color: "#94A3B8",
          marginTop: 24,
          opacity: interpolate(frame, [0.9 * fps, 1.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.9 * fps, 1.5 * fps],
            ["0px 16px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        Projects and tasks, right in your terminal.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
