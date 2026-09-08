import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { HookScene } from "./scenes/HookScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { MonitorScene } from "./scenes/MonitorScene";
import { AlertScene } from "./scenes/AlertScene";
import { MarginScene } from "./scenes/MarginScene";
import { AutomationScene } from "./scenes/AutomationScene";
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
      <TransitionSeries.Sequence durationInFrames={90} name="Monitor">
        <MonitorScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 8 })}
      />
      <TransitionSeries.Sequence durationInFrames={85} name="Alert">
        <AlertScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-left" })}
        timing={linearTiming({ durationInFrames: 8 })}
      />
      <TransitionSeries.Sequence durationInFrames={100} name="Margin">
        <MarginScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 8 })}
      />
      <TransitionSeries.Sequence durationInFrames={75} name="Automation">
        <AutomationScene />
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
