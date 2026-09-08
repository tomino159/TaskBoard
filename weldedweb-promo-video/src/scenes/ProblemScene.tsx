import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { BurstCaption } from "../components/BurstCaption";
import { headingFont } from "../fonts";

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();

  const strike = interpolate(frame, [10, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const answerOpacity = interpolate(frame, [32, 44], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      name="Problem background"
      style={{
        backgroundColor: "#05070C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "relative" }}>
        <BurstCaption
          words={["WEEKS", "OF", "WAITING?"]}
          fontSize={92}
          color="#F8FAFC"
          staggerFrames={5}
          startFrame={0}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            translate: "-50% -50%",
            width: `${strike * 780}px`,
            height: 8,
            backgroundColor: "#F87171",
            borderRadius: 4,
          }}
        />
      </div>
      <div
        style={{
          marginTop: 48,
          fontFamily: headingFont,
          fontWeight: 700,
          fontSize: 64,
          color: "#22D3EE",
          opacity: answerOpacity,
        }}
      >
        Not anymore.
      </div>
    </AbsoluteFill>
  );
};
