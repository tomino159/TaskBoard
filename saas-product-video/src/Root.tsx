import "./index.css";
import { Composition, Folder } from "remotion";
import { SaasProductVideo } from "./SaasProductVideo";
import { HookScene } from "./scenes/HookScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { FeatureScene } from "./scenes/FeatureScene";
import { PersistScene } from "./scenes/PersistScene";
import { CtaScene } from "./scenes/CtaScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="SaasProductVideo-Scenes">
        <Composition
          id="Hook"
          component={HookScene}
          durationInFrames={90}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Problem"
          component={ProblemScene}
          durationInFrames={80}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Feature"
          component={FeatureScene}
          durationInFrames={140}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Persist"
          component={PersistScene}
          durationInFrames={90}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Cta"
          component={CtaScene}
          durationInFrames={110}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
      <Composition
        id="SaasProductVideo"
        component={SaasProductVideo}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
