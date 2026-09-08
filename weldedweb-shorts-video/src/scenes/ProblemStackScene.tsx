import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { AnimatedGradientMesh } from "../components/AnimatedGradientMesh";
import { ParticleField } from "../components/ParticleField";
import { headingFont } from "../fonts";

const lines = [
  "Ceny sa menia denne.",
  "Ručná kontrola zaberá hodiny.",
  "Stratené marže si nevšimnete.",
];

const lineStarts = [4, 26, 48];

export const ProblemStackScene: React.FC = () => {
  const frame = useCurrentFrame();

  const dividerHeight = interpolate(frame, [0, 16], [0, 420], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      name="Problem stack background"
      style={{
        backgroundColor: "#05070f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimatedGradientMesh />
      <ParticleField count={14} seedOffset={900} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 48,
          width: 880,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            width: 90,
          }}
        >
          <div
            style={{
              fontFamily: headingFont,
              fontWeight: 700,
              fontSize: 20,
              color: "#fb923c",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Realita
          </div>
          <div
            style={{
              width: 3,
              height: dividerHeight,
              borderRadius: 2,
              background: "linear-gradient(180deg, #fb923c, rgba(251,146,60,0))",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            flex: 1,
          }}
        >
          {lines.map((line, i) => {
            const start = lineStarts[i];
            const isLatest =
              i === lines.length - 1 ||
              frame < lineStarts[i + 1] + 10;
            const opacity = interpolate(frame, [start, start + 10], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const slide = interpolate(frame, [start, start + 12], [50, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            });
            const dim = isLatest ? 1 : 0.35;
            const blurAmount = isLatest ? 0 : 5;
            const scaleAmount = isLatest ? 1 : 0.92;

            return (
              <div
                key={line}
                style={{
                  fontFamily: headingFont,
                  fontWeight: 700,
                  fontSize: 40,
                  color: "#FFFFFF",
                  opacity: opacity * dim,
                  translate: `${slide}px 0px`,
                  filter: `blur(${blurAmount}px)`,
                  scale: scaleAmount,
                  transformOrigin: "left center",
                }}
              >
                {line}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
