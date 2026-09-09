import React from "react";
import { useCurrentFrame } from "remotion";

export const AnimatedGradientMesh: React.FC = () => {
  const frame = useCurrentFrame();

  const blob1X = 30 + Math.sin(frame * 0.012) * 18;
  const blob1Y = 25 + Math.cos(frame * 0.01) * 14;
  const blob2X = 70 + Math.cos(frame * 0.014) * 16;
  const blob2Y = 65 + Math.sin(frame * 0.011) * 16;
  const blob3X = 50 + Math.sin(frame * 0.009 + 2) * 20;
  const blob3Y = 45 + Math.cos(frame * 0.013 + 1) * 20;

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: `${blob1X}%`,
          top: `${blob1Y}%`,
          translate: "-50% -50%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(77,107,255,0.55) 0%, rgba(10,26,74,0) 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `${blob2X}%`,
          top: `${blob2Y}%`,
          translate: "-50% -50%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.4) 0%, rgba(10,26,74,0) 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `${blob3X}%`,
          top: `${blob3Y}%`,
          translate: "-50% -50%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,20,90,0.6) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(45px)",
        }}
      />
    </div>
  );
};
