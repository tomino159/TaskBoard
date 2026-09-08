import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { CenterGlow } from "../components/GlowBackground";
import { ParticleField } from "../components/ParticleField";
import { CameraPunchIn } from "../components/CameraPunchIn";
import { headingFont } from "../fonts";

export const SubHeadlineScene: React.FC = () => {
  const frame = useCurrentFrame();

  const lineWidth = interpolate(frame, [10, 26], [0, 260], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const blurProgress = interpolate(frame, [0, 12], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      name="Sub headline background"
      style={{ backgroundColor: "#000000" }}
    >
      <CameraPunchIn from={1.03} to={1}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <CenterGlow />
          <ParticleField count={20} seedOffset={300} />
          <Interactive.Div
            name="Sub headline text"
            style={{
              fontFamily: headingFont,
              fontWeight: 700,
              fontSize: 52,
              color: "#FFFFFF",
              textAlign: "center",
              textShadow: "0 0 24px rgba(255,255,255,0.35)",
              maxWidth: 780,
              scale: interpolate(frame, [0, 16], [0.8, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.cubic),
                output: "perceptual-scale",
              }),
              opacity: interpolate(frame, [0, 14], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              filter: `blur(${blurProgress * 16}px)`,
            }}
          >
            Rýchlejšie rozhodnutia, lepšie ceny
          </Interactive.Div>
          <div
            style={{
              width: lineWidth,
              height: 4,
              borderRadius: 2,
              background: "linear-gradient(90deg, #a78bfa, #c7d2fe)",
              boxShadow: "0 0 16px rgba(167,139,250,0.7)",
            }}
          />
        </AbsoluteFill>
      </CameraPunchIn>
    </AbsoluteFill>
  );
};
