import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { BrowserMockup } from "../components/BrowserMockup";
import { headingFont } from "../fonts";

const blocks = [
  { label: "Hero banner", top: 24, height: 140, color: "#1D4ED8" },
  { label: "Feature cards", top: 180, height: 160, color: "#2563EB" },
  { label: "Pricing table", top: 356, height: 140, color: "#3B82F6" },
  { label: "Footer", top: 512, height: 90, color: "#1E40AF" },
];

export const BuilderScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Builder background"
      style={{
        backgroundColor: "#05070C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      <div
        style={{
          fontFamily: headingFont,
          fontWeight: 800,
          fontSize: 72,
          color: "#F8FAFC",
          opacity: interpolate(frame, [0, 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Drag. Drop. Done.
      </div>
      <BrowserMockup url="weldedweb.sk/editor">
        <div style={{ padding: 24, position: "relative", height: "100%" }}>
          {blocks.map((block, i) => {
            const start = 14 + i * 12;
            const drop = interpolate(frame, [start, start + 14], [-40, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.back(1.6)),
            });
            const opacity = interpolate(frame, [start, start + 10], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={block.label}
                style={{
                  position: "absolute",
                  left: 24,
                  right: 24,
                  top: block.top,
                  height: block.height,
                  translate: `0px ${drop}px`,
                  opacity,
                  backgroundColor: block.color,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: headingFont,
                  fontWeight: 700,
                  fontSize: 24,
                  color: "#F8FAFC",
                }}
              >
                {block.label}
              </div>
            );
          })}
        </div>
      </BrowserMockup>
    </AbsoluteFill>
  );
};
