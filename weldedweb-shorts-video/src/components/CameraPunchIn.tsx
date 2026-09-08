import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const CameraPunchIn: React.FC<{
  children: React.ReactNode;
  from?: number;
  to?: number;
}> = ({ children, from = 1, to = 1.06 }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const scale = interpolate(frame, [0, durationInFrames], [from, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "absolute", inset: 0, scale }}>{children}</div>
  );
};
