import "./index.css";
import { Composition, Folder } from "remotion";
import { WeldedWebPromoVideo } from "./WeldedWebPromoVideo";
import { HookScene } from "./scenes/HookScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { MonitorScene } from "./scenes/MonitorScene";
import { AlertScene } from "./scenes/AlertScene";
import { MarginScene } from "./scenes/MarginScene";
import { AutomationScene } from "./scenes/AutomationScene";
import { CtaScene } from "./scenes/CtaScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="WeldedWebPromoVideo-Scenes">
        <Composition
          id="Hook"
          component={HookScene}
          durationInFrames={60}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Problem"
          component={ProblemScene}
          durationInFrames={55}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Monitor"
          component={MonitorScene}
          durationInFrames={90}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Alert"
          component={AlertScene}
          durationInFrames={85}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Margin"
          component={MarginScene}
          durationInFrames={100}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Automation"
          component={AutomationScene}
          durationInFrames={75}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Cta"
          component={CtaScene}
          durationInFrames={85}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
      <Composition
        id="WeldedWebPromoVideo"
        component={WeldedWebPromoVideo}
        durationInFrames={502}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
