import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { DotGrid } from "../components/DotGrid";
import { ParticleField } from "../components/ParticleField";

export const LightWipeScene: React.FC = () => {
  const frame = useCurrentFrame();

  const wipe = interpolate(frame, [0, 26], [-60, 160], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const flashOpacity = interpolate(
    frame,
    [10, 14, 22],
    [0, 0.9, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill name="Light wipe background" style={{ backgroundColor: "#000000" }}>
      <DotGrid startFrame={4} />
      <ParticleField count={16} seedOffset={200} color="#93c5fd" />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#FFFFFF",
          opacity: flashOpacity,
        }}
      />
      {[
        { color: "#ff3366", offset: 10 },
        { color: "#33ccff", offset: -10 },
      ].map(({ color, offset }) => (
        <div
          key={color}
          style={{
            position: "absolute",
            top: -400,
            left: `${wipe}%`,
            translate: `${offset}px 0px`,
            width: 260,
            height: 2400,
            rotate: "18deg",
            background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, ${color} 50%, rgba(255,255,255,0) 100%)`,
            filter: "blur(6px)",
            opacity: 0.45,
            mixBlendMode: "screen",
          }}
        />
      ))}
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
