import "./index.css";
import { Composition, Folder } from "remotion";
import { WeldedWebShorts } from "./WeldedWebShorts";
import { HookScene } from "./scenes/HookScene";
import { LogoRevealScene } from "./scenes/LogoRevealScene";
import { LightWipeScene } from "./scenes/LightWipeScene";
import { SubHeadlineScene } from "./scenes/SubHeadlineScene";
import { DashboardScene1 } from "./scenes/DashboardScene1";
import { DashboardScene2 } from "./scenes/DashboardScene2";
import { ClosingHeadlineScene } from "./scenes/ClosingHeadlineScene";
import { OutroScene } from "./scenes/OutroScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="WeldedWebShorts-Scenes">
        <Composition
          id="Hook"
          component={HookScene}
          durationInFrames={100}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="LogoReveal"
          component={LogoRevealScene}
          durationInFrames={60}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="LightWipe"
          component={LightWipeScene}
          durationInFrames={30}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="SubHeadline"
          component={SubHeadlineScene}
          durationInFrames={40}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="Dashboard1"
          component={DashboardScene1}
          durationInFrames={55}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="Dashboard2"
          component={DashboardScene2}
          durationInFrames={45}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="ClosingHeadline"
          component={ClosingHeadlineScene}
          durationInFrames={30}
          fps={30}
          width={1080}
          height={1920}
        />
        <Composition
          id="Outro"
          component={OutroScene}
          durationInFrames={60}
          fps={30}
          width={1080}
          height={1920}
        />
      </Folder>
      <Composition
        id="WeldedWebShorts"
        component={WeldedWebShorts}
        durationInFrames={420}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
