import { vars } from "nativewind";

export const themes = {
  light: vars({
    "--color-primary": "#000000",      // black
    "--color-secondary": "rgba(0, 0, 0, 0.05)",    // gray-500
    "--color-background": "#ffffff",   // white
    "--color-text": "#000000",     
    "--color-invert": "#000000",
  }),
  dark: vars({
    "--color-primary": "#ffffff",      // white
    "--color-secondary": "rgba(0,0,0, 0.5)",    // gray-400
    "--color-background": "#18181C",   // black
    "--color-text": "#ffffff",         // white text
    "--color-invert": "#ffffff",
  }),
}; 