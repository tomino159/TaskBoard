import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { CenterGlow, LensFlare } from "../components/GlowBackground";
import { RippleRings } from "../components/RippleRings";
import { ParticleField } from "../components/ParticleField";
import { CameraPunchIn } from "../components/CameraPunchIn";
import { Shine } from "../components/Shine";
import { headingFont } from "../fonts";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const haloRotation = frame * 0.6;

  return (
    <AbsoluteFill
      name="Outro background"
      style={{ backgroundColor: "#000000" }}
    >
      <CameraPunchIn from={1} to={1.08}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <CenterGlow />
          <LensFlare />
          <ParticleField count={30} seedOffset={700} />
          <div
            style={{
              position: "absolute",
              width: 520,
              height: 520,
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg, rgba(167,139,250,0) 0%, rgba(167,139,250,0.35) 20%, rgba(167,139,250,0) 45%, rgba(199,210,254,0.3) 65%, rgba(167,139,250,0) 100%)",
              rotate: `${haloRotation}deg`,
              filter: "blur(6px)",
            }}
          />
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 260,
              height: 260,
            }}
          >
            <RippleRings ringCount={3} staggerFrames={20} loopFrames={60} />
            <Interactive.Div
              name="Outro logo"
              style={{
                fontFamily: headingFont,
                fontWeight: 800,
                fontSize: 56,
                backgroundImage:
                  "linear-gradient(135deg, #a78bfa 0%, #c7d2fe 100%)",
                backgroundClip: "text",
                color: "transparent",
                textAlign: "center",
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
              }}
            >
              WeldedWeb
            </Interactive.Div>
            <Shine startFrame={14} />
          </div>
          <div
            style={{
              fontFamily: headingFont,
              fontWeight: 600,
              fontSize: 32,
              color: "#94a3b8",
              opacity: interpolate(frame, [24, 38], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            weldedweb.sk
          </div>
        </AbsoluteFill>
      </CameraPunchIn>
    </AbsoluteFill>
  );
};
