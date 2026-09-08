import { AbsoluteFill, Sequence } from "remotion";
import { HookScene } from "./scenes/HookScene";
import { LogoRevealScene } from "./scenes/LogoRevealScene";
import { LightWipeScene } from "./scenes/LightWipeScene";
import { SubHeadlineScene } from "./scenes/SubHeadlineScene";
import { DashboardScene1 } from "./scenes/DashboardScene1";
import { DashboardScene2 } from "./scenes/DashboardScene2";
import { ClosingHeadlineScene } from "./scenes/ClosingHeadlineScene";
import { OutroScene } from "./scenes/OutroScene";
import { FilmGrain, Vignette } from "./components/FilmGrain";
import { ChromaticFlash } from "./components/ChromaticFlash";

const cutFrames = [100, 160, 190, 230, 285, 330, 360];

export const WeldedWebShorts: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <Sequence durationInFrames={100} name="Hook">
        <HookScene />
      </Sequence>
      <Sequence from={100} durationInFrames={60} name="LogoReveal">
        <LogoRevealScene />
      </Sequence>
      <Sequence from={160} durationInFrames={30} name="LightWipe">
        <LightWipeScene />
      </Sequence>
      <Sequence from={190} durationInFrames={40} name="SubHeadline">
        <SubHeadlineScene />
      </Sequence>
      <Sequence from={230} durationInFrames={55} name="Dashboard1">
        <DashboardScene1 />
      </Sequence>
      <Sequence from={285} durationInFrames={45} name="Dashboard2">
        <DashboardScene2 />
      </Sequence>
      <Sequence from={330} durationInFrames={30} name="ClosingHeadline">
        <ClosingHeadlineScene />
      </Sequence>
      <Sequence from={360} durationInFrames={60} name="Outro">
        <OutroScene />
      </Sequence>
      {cutFrames.map((cutFrame) => (
        <Sequence
          key={cutFrame}
          from={cutFrame - 5}
          durationInFrames={12}
          name={`Flash-${cutFrame}`}
        >
          <ChromaticFlash durationInFrames={12} />
        </Sequence>
      ))}
      <Vignette />
      <FilmGrain />
    </AbsoluteFill>
  );
};
