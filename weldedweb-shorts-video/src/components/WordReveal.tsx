import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { headingFont } from "../fonts";

export const WordReveal: React.FC<{
  words: string[];
  fontSize: number;
  color: string;
  staggerFrames: number;
  startFrame?: number;
  textShadow?: string;
}> = ({
  words,
  fontSize,
  color,
  staggerFrames,
  startFrame = 0,
  textShadow = "0 0 24px rgba(255,255,255,0.35)",
}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "0 16px",
        maxWidth: 900,
        textAlign: "center",
      }}
    >
      {words.map((word, i) => {
        const wordStart = startFrame + i * staggerFrames;
        const progress = interpolate(
          frame,
          [wordStart, wordStart + 12],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.back(1.6)),
          },
        );
        return (
          <span
            key={`${word}-${i}`}
            style={{
              fontFamily: headingFont,
              fontWeight: 700,
              fontSize,
              color,
              textShadow,
              scale: 0.75 + progress * 0.25,
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
