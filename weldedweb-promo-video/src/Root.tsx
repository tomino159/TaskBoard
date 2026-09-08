import "./index.css";
import { Composition, Folder } from "remotion";
import { WeldedWebPromoVideo } from "./WeldedWebPromoVideo";
import { HookScene } from "./scenes/HookScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { BuilderScene } from "./scenes/BuilderScene";
import { TemplatesScene } from "./scenes/TemplatesScene";
import { PublishScene } from "./scenes/PublishScene";
import { SpeedScene } from "./scenes/SpeedScene";
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
          id="Builder"
          component={BuilderScene}
          durationInFrames={85}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Templates"
          component={TemplatesScene}
          durationInFrames={75}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Publish"
          component={PublishScene}
          durationInFrames={75}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Speed"
          component={SpeedScene}
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
        durationInFrames={462}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
