import { AbsoluteFill } from "remotion";
import { BottomGlow } from "../components/GlowBackground";
import { WordReveal } from "../components/WordReveal";
import { ParticleField } from "../components/ParticleField";
import { CameraPunchIn } from "../components/CameraPunchIn";

export const HookScene: React.FC = () => {
  return (
    <AbsoluteFill name="Hook background" style={{ backgroundColor: "#000000" }}>
      <CameraPunchIn from={1.04} to={1}>
        <AbsoluteFill
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BottomGlow />
          <ParticleField count={26} seedOffset={0} />
          <WordReveal
            words={["Sleduj", "ceny", "konkurencie", "automaticky"]}
            fontSize={64}
            color="#FFFFFF"
            staggerFrames={14}
            startFrame={6}
          />
        </AbsoluteFill>
      </CameraPunchIn>
    </AbsoluteFill>
  );
};
