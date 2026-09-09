import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { headingFont } from "../fonts";

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Problem background"
      style={{
        backgroundColor: "#0B1220",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 110px",
      }}
    >
      <Interactive.Div
        name="Problem line 1"
        style={{
          fontFamily: headingFont,
          fontWeight: 700,
          fontSize: 76,
          color: "#F8FAFC",
          textAlign: "center",
          lineHeight: 1.25,
          whiteSpace: "nowrap",
          opacity: interpolate(frame, [0, 0.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0, 0.4 * fps],
            ["0px 20px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        Sticky notes. Random spreadsheets.
      </Interactive.Div>
      <Interactive.Div
        name="Problem line 2"
        style={{
          fontFamily: headingFont,
          fontWeight: 700,
          fontSize: 76,
          color: "#F8FAFC",
          textAlign: "center",
          lineHeight: 1.25,
          whiteSpace: "nowrap",
          opacity: interpolate(frame, [0.35 * fps, 0.75 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.35 * fps, 0.75 * fps],
            ["0px 20px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        Tasks slipping through the cracks.
      </Interactive.Div>
      <Interactive.Div
        name="Problem resolution"
        style={{
          fontFamily: headingFont,
          fontWeight: 700,
          fontSize: 52,
          color: "#34D399",
          marginTop: 56,
          opacity: interpolate(frame, [1.6 * fps, 2.1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        There's a simpler way.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
