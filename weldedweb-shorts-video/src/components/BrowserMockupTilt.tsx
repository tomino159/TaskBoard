import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

export const BrowserMockupTilt: React.FC<{
  children: React.ReactNode;
  startFrame?: number;
}> = ({ children, startFrame = 0 }) => {
  const frame = useCurrentFrame();

  const rise = interpolate(frame, [startFrame, startFrame + 24], [220, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const opacity = interpolate(
    frame,
    [startFrame, startFrame + 16],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const tilt = interpolate(frame, [startFrame, startFrame + 24], [26, 15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        position: "relative",
        perspective: 1400,
        translate: `0px ${rise}px`,
        opacity,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: -60,
          translate: "-50% 0px",
          width: 760,
          height: 160,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(167,139,250,0.45) 0%, rgba(77,107,255,0.2) 50%, rgba(0,0,0,0) 75%)",
          filter: "blur(6px)",
        }}
      />
      <div
        style={{
          width: 860,
          borderRadius: 22,
          overflow: "hidden",
          border: "1px solid rgba(199,210,254,0.25)",
          boxShadow: "0 60px 120px rgba(0,0,0,0.6)",
          transform: `rotateX(${tilt}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
