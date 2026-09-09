import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";

export const { fontFamily: headingFont } = loadInter("normal", {
  weights: ["600", "700", "800"],
  subsets: ["latin"],
});

export const { fontFamily: monoFont } = loadJetBrainsMono("normal", {
  weights: ["400", "500", "700"],
  subsets: ["latin"],
});
