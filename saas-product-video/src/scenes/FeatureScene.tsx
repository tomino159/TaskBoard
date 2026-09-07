import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { headingFont, monoFont } from "../fonts";
import { TerminalWindow } from "../components/TerminalWindow";

const menuItems = [
  "1. Create project",
  "2. Add task to project",
  "3. Mark task as completed",
  "4. List all projects and tasks",
  "5. Save to file",
  "6. Load from file",
  "7. Exit",
];

export const FeatureScene: React.FC = () => {
  const frame = useCurrentFrame();

  const taskDone = frame >= 108;

  return (
    <AbsoluteFill
      name="Feature background"
      style={{
        backgroundColor: "#0B1220",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Interactive.Div
        name="Feature headline"
        style={{
          fontFamily: headingFont,
          fontWeight: 700,
          fontSize: 56,
          color: "#F8FAFC",
          marginBottom: 44,
          opacity: interpolate(frame, [0, 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Projects and tasks, one keystroke away.
      </Interactive.Div>
      <TerminalWindow title="taskboard — dotnet run">
        <div
          style={{
            fontFamily: monoFont,
            fontSize: 26,
            color: "#CBD5E1",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {menuItems.map((item, i) => {
            const start = i * 4;
            return (
              <div
                key={item}
                style={{
                  opacity: interpolate(frame, [start, start + 12], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              >
                {item}
              </div>
            );
          })}
          <div
            style={{
              marginTop: 18,
              color: "#34D399",
              opacity: interpolate(frame, [46, 58], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            {"> Select an option: 1"}
          </div>
          <div
            style={{
              color: "#94A3B8",
              opacity: interpolate(frame, [60, 72], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            ✔ Project created: Website Redesign
          </div>
          <div
            style={{
              marginTop: 18,
              color: "#34D399",
              opacity: interpolate(frame, [86, 98], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            {"> Select an option: 3"}
          </div>
          <div
            style={{
              color: taskDone ? "#34D399" : "#94A3B8",
              scale: taskDone ? 1.04 : 1,
              opacity: interpolate(frame, [100, 108], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            {taskDone ? "[X]" : "[ ]"} Design homepage mockup
          </div>
        </div>
      </TerminalWindow>
    </AbsoluteFill>
  );
};
