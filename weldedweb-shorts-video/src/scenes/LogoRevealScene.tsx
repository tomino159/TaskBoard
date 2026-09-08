import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { BottomGlow } from "../components/GlowBackground";
import { ParticleField } from "../components/ParticleField";
import { CameraPunchIn } from "../components/CameraPunchIn";
import { Shine } from "../components/Shine";
import { headingFont } from "../fonts";

export const LogoRevealScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Logo reveal background"
      style={{ backgroundColor: "#000000" }}
    >
      <CameraPunchIn from={1} to={1.05}>
        <AbsoluteFill
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BottomGlow />
          <ParticleField count={22} seedOffset={100} />
          <div style={{ position: "relative" }}>
            <Interactive.Div
              name="Logo wordmark"
              style={{
                fontFamily: headingFont,
                fontWeight: 800,
                fontSize: 96,
                backgroundImage:
                  "linear-gradient(135deg, #a78bfa 0%, #c7d2fe 100%)",
                backgroundClip: "text",
                color: "transparent",
                scale: interpolate(frame, [0, 16], [0.82, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.spring({ damping: 200 }),
                  output: "perceptual-scale",
                }),
                opacity: interpolate(frame, [0, 14], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                rotate: `${interpolate(frame, [0, 16], [-6, 0], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.out(Easing.cubic),
                })}deg`,
              }}
            >
              WeldedWeb
            </Interactive.Div>
            <Shine startFrame={18} />
          </div>
        </AbsoluteFill>
      </CameraPunchIn>
    </AbsoluteFill>
  );
};
