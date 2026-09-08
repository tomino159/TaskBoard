import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { HookScene } from "./scenes/HookScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { BuilderScene } from "./scenes/BuilderScene";
import { TemplatesScene } from "./scenes/TemplatesScene";
import { PublishScene } from "./scenes/PublishScene";
import { SpeedScene } from "./scenes/SpeedScene";
import { CtaScene } from "./scenes/CtaScene";

export const WeldedWebPromoVideo: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={60} name="Hook">
        <HookScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 8 })}
      />
      <TransitionSeries.Sequence durationInFrames={55} name="Problem">
        <ProblemScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-left" })}
        timing={linearTiming({ durationInFrames: 8 })}
      />
      <TransitionSeries.Sequence durationInFrames={85} name="Builder">
        <BuilderScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 8 })}
      />
      <TransitionSeries.Sequence durationInFrames={75} name="Templates">
        <TemplatesScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-left" })}
        timing={linearTiming({ durationInFrames: 8 })}
      />
      <TransitionSeries.Sequence durationInFrames={75} name="Publish">
        <PublishScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 8 })}
      />
      <TransitionSeries.Sequence durationInFrames={75} name="Speed">
        <SpeedScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-left" })}
        timing={linearTiming({ durationInFrames: 8 })}
      />
      <TransitionSeries.Sequence durationInFrames={85} name="Cta">
        <CtaScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
