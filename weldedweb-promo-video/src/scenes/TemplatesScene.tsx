import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { headingFont } from "../fonts";

const templates = [
  { name: "Studio", color: "#1D4ED8" },
  { name: "Portfolio", color: "#2563EB" },
  { name: "Storefront", color: "#3B82F6" },
  { name: "Landing", color: "#60A5FA" },
];

export const TemplatesScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Templates background"
      style={{
        backgroundColor: "#05070C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 56,
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
        Pick a template.
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        {templates.map((template, i) => {
          const start = 8 + i * 8;
          const slide = interpolate(frame, [start, start + 16], [90, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          });
          const opacity = interpolate(frame, [start, start + 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={template.name}
              style={{
                width: 220,
                height: 320,
                borderRadius: 18,
                backgroundColor: "#0B1220",
                border: `2px solid ${template.color}`,
                translate: `0px ${slide}px`,
                opacity,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 140,
                  height: 180,
                  borderRadius: 10,
                  backgroundColor: template.color,
                }}
              />
              <div
                style={{
                  fontFamily: headingFont,
                  fontWeight: 700,
                  fontSize: 24,
                  color: "#F8FAFC",
                }}
              >
                {template.name}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
