import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const ChromaticFlash: React.FC<{ durationInFrames?: number }> = ({
  durationInFrames = 10,
}) => {
  const frame = useCurrentFrame();

  const offset = interpolate(frame, [0, durationInFrames], [14, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(
    frame,
    [0, durationInFrames * 0.4, durationInFrames],
    [0.9, 0.5, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  if (offset <= 0.1) {
    return null;
  }

  return (
    <div style={{ position: "absolute", inset: 0, mixBlendMode: "screen", opacity }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#ff3366",
          translate: `${offset}px 0px`,
          mixBlendMode: "screen",
          opacity: 0.35,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#33ccff",
          translate: `${-offset}px 0px`,
          mixBlendMode: "screen",
          opacity: 0.35,
        }}
      />
    </div>
  );
};
