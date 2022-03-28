import { css } from "@emotion/react";
import facepaint from "facepaint";

const scaleBase = 4;

export const scale = (multiplier: number): string =>
  `${scaleBase * multiplier}px`;

export const breakpoints = [480, 800, 960, 1200];

export const mq = facepaint(
  breakpoints.map((bp) => `@media(min-width: ${bp}px)`),
);

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  strong: 700,
};

export const colors = {
  primary100: "#bbdefb",
  primary200: "#90caf9",
  primary300: "#64b5f6",
  primary400: "#42a5f5",
  primary500: "#2196f3",
  primary600: "#1e88e5",
  primary700: "#1976d2",
  primary800: "#1565c0",
  primary900: "#203040",
  error100: "#ffcdd2",
  error200: "#ef9a9a",
  error300: "#e57373",
  error400: "#ef5350",
  error500: "#f44336",
  error600: "#e53935",
  error700: "#d32f2f",
  error800: "#c62828",
  error900: "#b71c1c",
  text100: "#000000",
  text200: "#191919",
  text300: "#393939",
  text400: "#696969",
  text500: "#999999",
  text600: "#cccccc",
  text700: "#ededed",
  text800: "#f6f6f6",
  text900: "#ffffff",
  background900: "#000000",
  background800: "#191919",
  background700: "#393939",
  background600: "#696969",
  background500: "#999999",
  background400: "#cccccc",
  background300: "#ededed",
  background200: "#ededed",
  background100: "#f6f6f6",
  background50: "#ffffff",
};

export const darkColors = {
  primary100: "#bbdefb",
  primary200: "#90caf9",
  primary300: "#64b5f6",
  primary400: "#42a5f5",
  primary500: "#2196f3",
  primary600: "#1e88e5",
  primary700: "#1976d2",
  primary800: "#1565c0",
  primary900: "#203040",
  error100: "#ffcdd2",
  error200: "#ef9a9a",
  error300: "#e57373",
  error400: "#ef5350",
  error500: "#f44336",
  error600: "#e53935",
  error700: "#d32f2f",
  error800: "#c62828",
  error900: "#b71c1c",
  text100: "#000000",
  text200: "#191919",
  text300: "#393939",
  text400: "#696969",
  text500: "#999999",
  text600: "#cccccc",
  text700: "#ededed",
  text800: "#f6f6f6",
  text900: "#ffffff",
  background900: "#000000",
  background800: "#191919",
  background700: "#393939",
  background600: "#696969",
  background500: "#999999",
  background400: "#cccccc",
  background300: "#ededed",
  background200: "#ededed",
  background100: "#f6f6f6",
  background50: "#ffffff",
};

/* DARK
  text900: "#000000",
  text800: "#191919",
  text700: "#393939",
  text600: "#696969",
  text500: "#999999",
  text400: "#cccccc",
  text300: "#ededed",
  text200: "#f6f6f6",
  text100: "#ffffff",
  background50: "#000000",
  background100: "#191919",
  background200: "#393939",
  background300: "#696969",
  background400: "#999999",
  background500: "#cccccc",
  background600: "#ededed",
  background700: "#ededed",
  background800: "#f6f6f6",
  background900: "#ffffff",
*/

export const globalStyles = css({
  html: {
    color: colors.primary900,
    fontFamily: "Montserrat, sans-serif",
    height: "100%",
    WebkitFontSmoothing: "antialiased",
  },
  "h1, h2, h3, h4": {
    fontFamily: "Rammetto One",
  },
  button: {
    fontFamily: "inherit",
  },
  input: {
    fontFamily: "inherit",
  },
  textarea: {
    fontFamily: "inherit",
    overflow: "auto",
  },
  strong: {
    fontWeight: fontWeights.medium,
  },
  "*": {
    boxSizing: "border-box",
  },
});

export const fontSizes = {
  h1: scale(12.5),
  h2: scale(8),
  h3: scale(6.25),
  h4: scale(5),
  large: scale(4.25),
  default: scale(3.75),
  small: scale(3.5),
  tiny: scale(3),
};

export const themeBase = {
  colors,
  fontSizes,
  fontWeights,
  mq,
  scale,
};

export type Theme = typeof themeBase;

export const lightTheme: Theme = {
  colors,
  fontSizes,
  fontWeights,
  mq,
  scale,
};

export const darkTheme: Theme = {
  colors,
  fontSizes,
  fontWeights,
  mq,
  scale,
};
