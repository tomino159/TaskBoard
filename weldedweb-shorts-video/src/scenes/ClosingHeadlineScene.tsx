import { AbsoluteFill } from "remotion";
import { BottomGlow } from "../components/GlowBackground";
import { WordReveal } from "../components/WordReveal";

export const ClosingHeadlineScene: React.FC = () => {
  return (
    <AbsoluteFill
      name="Closing headline background"
      style={{
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BottomGlow appearDurationInFrames={10} />
      <WordReveal
        words={["Pripravený", "sledovať", "konkurenciu?"]}
        fontSize={58}
        color="#FFFFFF"
        staggerFrames={8}
        startFrame={2}
      />
    </AbsoluteFill>
  );
};
