import { AbsoluteFill } from "remotion";
import { BottomGlow } from "../components/GlowBackground";
import { WordReveal } from "../components/WordReveal";

export const HookScene: React.FC = () => {
  return (
    <AbsoluteFill
      name="Hook background"
      style={{
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BottomGlow />
      <WordReveal
        words={["Sleduj", "ceny", "konkurencie", "automaticky"]}
        fontSize={64}
        color="#FFFFFF"
        staggerFrames={14}
        startFrame={6}
      />
    </AbsoluteFill>
  );
};
