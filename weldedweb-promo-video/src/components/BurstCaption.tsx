import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { headingFont } from "../fonts";

export const BurstCaption: React.FC<{
  words: string[];
  fontSize: number;
  color: string;
  staggerFrames: number;
  startFrame?: number;
}> = ({ words, fontSize, color, staggerFrames, startFrame = 0 }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0 24px",
        maxWidth: 1500,
      }}
    >
      {words.map((word, i) => {
        const wordStart = startFrame + i * staggerFrames;
        const progress = interpolate(
          frame,
          [wordStart, wordStart + 10],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.back(1.8)),
          },
        );
        return (
          <span
            key={`${word}-${i}`}
            style={{
              fontFamily: headingFont,
              fontWeight: 800,
              fontSize,
              color,
              scale: 0.4 + progress * 0.6,
              opacity: progress,
              display: "inline-block",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
