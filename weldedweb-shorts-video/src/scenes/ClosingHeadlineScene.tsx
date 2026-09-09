import { AbsoluteFill } from "remotion";
import { BottomGlow } from "../components/GlowBackground";
import { WordReveal } from "../components/WordReveal";
import { ParticleField } from "../components/ParticleField";
import { CameraPunchIn } from "../components/CameraPunchIn";

export const ClosingHeadlineScene: React.FC = () => {
  return (
    <AbsoluteFill
      name="Closing headline background"
      style={{ backgroundColor: "#000000" }}
    >
      <CameraPunchIn from={1.04} to={1}>
        <AbsoluteFill
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BottomGlow appearDurationInFrames={10} />
          <ParticleField count={22} seedOffset={600} />
          <WordReveal
            words={["Pripravený", "sledovať", "konkurenciu?"]}
            fontSize={58}
            color="#FFFFFF"
            staggerFrames={8}
            startFrame={2}
          />
        </AbsoluteFill>
      </CameraPunchIn>
    </AbsoluteFill>
  );
};
