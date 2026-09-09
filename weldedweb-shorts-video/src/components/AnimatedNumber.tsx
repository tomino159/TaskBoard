import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

export const useCountUp = (
  from: number,
  to: number,
  startFrame: number,
  durationInFrames: number,
) => {
  const frame = useCurrentFrame();
  return interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [from, to],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    },
  );
};

export const CursorDot: React.FC<{
  x: number;
  y: number;
  startFrame: number;
  clickFrame: number;
}> = ({ x, y, startFrame, clickFrame }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(
    frame,
    [clickFrame, clickFrame + 4, clickFrame + 10],
    [1, 0.7, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const ringScale = interpolate(
    frame,
    [clickFrame, clickFrame + 14],
    [0.4, 1.8],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const ringOpacity = interpolate(
    frame,
    [clickFrame, clickFrame + 14],
    [0.7, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div style={{ position: "absolute", left: x, top: y, opacity }}>
      <div
        style={{
          position: "absolute",
          left: -14,
          top: -14,
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "2px solid #c7d2fe",
          scale: ringScale,
          opacity: ringOpacity,
        }}
      />
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "#c7d2fe",
          boxShadow: "0 0 12px rgba(199,210,254,0.9)",
          scale,
        }}
      />
    </div>
  );
};
