import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const DotGrid: React.FC<{ startFrame?: number }> = ({
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        backgroundImage:
          "radial-gradient(rgba(199,210,254,0.35) 1.5px, transparent 1.5px)",
        backgroundSize: "44px 44px",
      }}
    />
  );
};
