import React from "react";
import { useCurrentFrame } from "remotion";

export const FilmGrain: React.FC = () => {
  const frame = useCurrentFrame();
  const offsetX = (frame * 13) % 200;
  const offsetY = (frame * 7) % 200;

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.05,
        mixBlendMode: "overlay",
      }}
    >
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves={2}
          stitchTiles="stitch"
          x={-offsetX}
          y={-offsetY}
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
};

export const Vignette: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
      }}
    />
  );
};
