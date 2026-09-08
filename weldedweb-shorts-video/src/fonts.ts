import { loadFont as loadPlusJakartaSans } from "@remotion/google-fonts/PlusJakartaSans";

export const { fontFamily: headingFont } = loadPlusJakartaSans("normal", {
  weights: ["600", "700", "800"],
  subsets: ["latin"],
});
