import "styled-components";
import {
  brandColors,
  gradientColors,
  accentColors,
  primaryColors,
  successColors,
  warningColors,
  errorColors,
  grayscaleColors
} from "./colors";

const theme = {
  colors: {
    text: primaryColors.brandText,
    background: grayscaleColors.gray000,
    ...brandColors,
    ...gradientColors,
    ...accentColors,
    ...primaryColors,
    ...successColors,
    ...warningColors,
    ...errorColors,
    ...grayscaleColors
  },
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: [500, 700],
  fonts: {
    sansSerif: 'Inter, "Helvetica Neue", Arial, sans-serif',
    mono: 'Monaco, Consolas, "Lucida Console", monospace'
  },
  radii: [0, 4],
  breakpoints: ["40em", "52em", "64em"],
  shadows: [
    "0",
    "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "0px 4px 8px rgba(0, 0, 0, 0.1)",
    "0px 6px 12px rgba(0, 0, 0, 0.1)",
    "0px 8px 16px rgba(0, 0, 0, 0.1)",
    "0px 10px 20px rgba(0, 0, 0, 0.1)",
    "0px 12px 24px rgba(0, 0, 0, 0.1)"
  ]
};

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
