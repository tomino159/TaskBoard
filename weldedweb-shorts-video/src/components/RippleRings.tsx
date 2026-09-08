import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const RippleRings: React.FC<{
  ringCount: number;
  staggerFrames: number;
  loopFrames: number;
}> = ({ ringCount, staggerFrames, loopFrames }) => {
  const frame = useCurrentFrame();

  return (
    <>
      {Array.from({ length: ringCount }).map((_, i) => {
        const localFrame = (frame + i * staggerFrames) % loopFrames;
        const scale = interpolate(localFrame, [0, loopFrames], [0.5, 2.6], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const opacity = interpolate(
          localFrame,
          [0, loopFrames * 0.2, loopFrames],
          [0, 0.6, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 260,
              height: 260,
              borderRadius: "50%",
              border: "2px solid #c7d2fe",
              scale,
              opacity,
            }}
          />
        );
      })}
    </>
  );
};
