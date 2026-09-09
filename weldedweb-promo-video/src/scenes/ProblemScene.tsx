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
          words={["KONTROLUJETE", "CENY", "RUČNE?"]}
          fontSize={80}
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
            width: `${strike * 900}px`,
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
          color: "#FB923C",
          opacity: answerOpacity,
        }}
      >
        Už nie.
      </div>
    </AbsoluteFill>
  );
};
