import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { DotGrid } from "../components/DotGrid";

export const LightWipeScene: React.FC = () => {
  const frame = useCurrentFrame();

  const wipe = interpolate(frame, [0, 26], [-60, 160], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  return (
    <AbsoluteFill name="Light wipe background" style={{ backgroundColor: "#000000" }}>
      <DotGrid startFrame={4} />
      <div
        style={{
          position: "absolute",
          top: -400,
          left: `${wipe}%`,
          width: 260,
          height: 2400,
          rotate: "18deg",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(199,210,254,0.9) 45%, #FFFFFF 50%, rgba(199,210,254,0.9) 55%, rgba(255,255,255,0) 100%)",
          filter: "blur(2px)",
        }}
      />
    </AbsoluteFill>
  );
};
