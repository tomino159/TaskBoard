import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const Shine: React.FC<{ startFrame?: number }> = ({
  startFrame = 20,
}) => {
  const frame = useCurrentFrame();

  const position = interpolate(
    frame,
    [startFrame, startFrame + 24],
    [-60, 160],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: "18%",
          background:
            "linear-gradient(75deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0) 100%)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
};
