import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const ParticleField: React.FC<{
  count: number;
  seedOffset?: number;
  color?: string;
}> = ({ count, seedOffset = 0, color = "#c7d2fe" }) => {
  const frame = useCurrentFrame();
  const { height, durationInFrames } = useVideoConfig();

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const seed = i + seedOffset;
        const x = seededRandom(seed * 12.9898) * 100;
        const startY = seededRandom(seed * 78.233) * 100;
        const speed = 0.15 + seededRandom(seed * 45.164) * 0.25;
        const size = 2 + seededRandom(seed * 3.55) * 4;
        const phase = seededRandom(seed * 9.61) * durationInFrames;
        const y =
          (startY * (height / 100) - (frame + phase) * speed) %
          (height + 100);
        const normalizedY = ((y % (height + 100)) + (height + 100)) % (height + 100);
        const twinkle = 0.35 + 0.35 * Math.sin((frame + phase) * 0.08 + seed);

        return (
          <div
            key={seed}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: normalizedY - 50,
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: color,
              opacity: interpolate(twinkle, [0, 1], [0.15, 0.85]),
              boxShadow: `0 0 ${size * 2}px ${color}`,
            }}
          />
        );
      })}
    </>
  );
};
