import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const BottomGlow: React.FC<{ appearDurationInFrames?: number }> = ({
  appearDurationInFrames = 20,
}) => {
  const frame = useCurrentFrame();
  const grow = interpolate(frame, [0, appearDurationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: -200,
        translate: "-50% 0px",
        width: 1400,
        height: `${400 + grow * 500}px`,
        opacity: 0.3 + grow * 0.5,
        background:
          "radial-gradient(ellipse at center, #4d6bff 0%, #0a1a4a 55%, rgba(0,0,0,0) 75%)",
        filter: "blur(10px)",
      }}
    />
  );
};

export const CenterGlow: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse 900px 1100px at 50% 55%, #24337a 0%, #0a1a4a 45%, #000000 78%)",
      }}
    />
  );
};

export const LensFlare: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: -180,
        left: -180,
        width: 560,
        height: 560,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(199,210,254,0.55) 0%, rgba(77,107,255,0.25) 40%, rgba(0,0,0,0) 72%)",
        filter: "blur(4px)",
      }}
    />
  );
};
