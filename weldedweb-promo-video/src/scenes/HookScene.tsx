import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { BurstCaption } from "../components/BurstCaption";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();

  const glow = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      name="Hook background"
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
            "radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(5,7,12,0) 70%)",
          opacity: glow,
        }}
      />
      <BurstCaption
        words={["ZÍSKAJTE", "NÁSKOK."]}
        fontSize={120}
        color="#F8FAFC"
        staggerFrames={6}
        startFrame={0}
      />
      <div style={{ height: 20 }} />
      <BurstCaption
        words={["PRED", "KONKURENCIOU."]}
        fontSize={120}
        color="#FB923C"
        staggerFrames={6}
        startFrame={12}
      />
    </AbsoluteFill>
  );
};
