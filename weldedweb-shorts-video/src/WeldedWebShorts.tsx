import { Sequence } from "remotion";
import { HookScene } from "./scenes/HookScene";
import { LogoRevealScene } from "./scenes/LogoRevealScene";
import { LightWipeScene } from "./scenes/LightWipeScene";
import { SubHeadlineScene } from "./scenes/SubHeadlineScene";
import { DashboardScene1 } from "./scenes/DashboardScene1";
import { DashboardScene2 } from "./scenes/DashboardScene2";
import { ClosingHeadlineScene } from "./scenes/ClosingHeadlineScene";
import { OutroScene } from "./scenes/OutroScene";

export const WeldedWebShorts: React.FC = () => {
  return (
    <>
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
    </>
  );
};
