/* ==========================================================================
   Design Tokens — TypeScript export for JS / GSAP usage
   Extracted from jobyaviation.com compiled CSS
   ========================================================================== */

/* ---------------------------------------------------------------------------
   Colors
   --------------------------------------------------------------------------- */

export const colors = {
  white: "#f5f4df",
  black: "#0e1620",
  blue: "#007ae5",
  darkBlue: "#1c3f99",
  darkBlueUi: "#083e6f",
  orange: "#eb6110",
  grey: "#c7c6b6",
  pink: "#ffd9c9",
  beige: "#f5f4df",
} as const;

export type ColorToken = keyof typeof colors;

/* ---------------------------------------------------------------------------
   Easings  (CSS cubic-bezier strings — usable in GSAP via CustomEase or CSS)
   --------------------------------------------------------------------------- */

export const easings = {
  linear: "cubic-bezier(0.25, 0.25, 0.75, 0.75)",
  inSine: "cubic-bezier(0.12, 0, 0.39, 0)",
  outSine: "cubic-bezier(0.61, 1, 0.88, 1)",
  inOutSine: "cubic-bezier(0.37, 0, 0.63, 1)",
  inQuad: "cubic-bezier(0.11, 0, 0.5, 0)",
  outQuad: "cubic-bezier(0.5, 1, 0.89, 1)",
  inOutQuad: "cubic-bezier(0.45, 0, 0.55, 1)",
  inCubic: "cubic-bezier(0.32, 0, 0.67, 0)",
  outCubic: "cubic-bezier(0.33, 1, 0.68, 1)",
  inOutCubic: "cubic-bezier(0.65, 0, 0.35, 1)",
  inQuart: "cubic-bezier(0.5, 0, 0.75, 0)",
  outQuart: "cubic-bezier(0.25, 1, 0.5, 1)",
  inOutQuart: "cubic-bezier(0.76, 0, 0.24, 1)",
  inQuint: "cubic-bezier(0.64, 0, 0.78, 0)",
  outQuint: "cubic-bezier(0.22, 1, 0.36, 1)",
  inOutQuint: "cubic-bezier(0.83, 0, 0.17, 1)",
  inExpo: "cubic-bezier(0.7, 0, 0.84, 0)",
  outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  inOutExpo: "cubic-bezier(0.87, 0, 0.13, 1)",
  inCirc: "cubic-bezier(0.55, 0, 1, 0.45)",
  outCirc: "cubic-bezier(0, 0.55, 0.45, 1)",
  inOutCirc: "cubic-bezier(0.85, 0, 0.15, 1)",
  inBack: "cubic-bezier(0.36, 0, 0.66, -0.56)",
  outBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  inOutBack: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  outCurveCubic: "cubic-bezier(0.35, 0.2, 0, 1)",
  power1In: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  power1Out: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  power1InOut: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  power2In: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  power2Out: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  power2InOut: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  power3In: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  power3Out: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  power3InOut: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  power4In: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
  power4Out: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  power4InOut: "cubic-bezier(0.77, 0, 0.175, 1)",
  snappy: "cubic-bezier(0.2, 0.21, 0, 1)",
} as const;

export type EasingToken = keyof typeof easings;

/* ---------------------------------------------------------------------------
   Breakpoints (px)
   --------------------------------------------------------------------------- */

export const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1600,
  wide: 2056,
} as const;

export type BreakpointToken = keyof typeof breakpoints;

/** Media-query helpers (min-width) */
export const mq = {
  mobile: `(max-width: ${breakpoints.mobile}px)`,
  tabletOnly: `(min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet}px)`,
  tablet: `(min-width: ${breakpoints.mobile}px)`,
  desktop: `(min-width: ${breakpoints.tablet}px)`,
  wide: `(min-width: ${breakpoints.wide}px)`,
} as const;

/* ---------------------------------------------------------------------------
   Grid
   --------------------------------------------------------------------------- */

export const grid = {
  columns: 16,
  columnsMobile: 6,
  gutterWidth: "1.6rem",
  gutterWidthMobile: "0.8rem",
  basePadding: "4rem",
  basePaddingMobile: "1.6rem",
} as const;

/* ---------------------------------------------------------------------------
   Animation Durations / Stagger
   --------------------------------------------------------------------------- */

export const animation = {
  titleStagger: 0.083,
  titleDuration: 0.667,
  titleFromY: "1.9rem",
  titleToY: "0rem",
  textStagger: 0.083,
  textDuration: 0.5,
  textFromY: "1.4rem",
  textToY: "0rem",
  roundDuration: 0.5,
  stackDelay: 0.333,
  lineDelay: 0.083,
  lineDuration: 0.833,
} as const;

/* ---------------------------------------------------------------------------
   Z-Index Layers
   --------------------------------------------------------------------------- */

export const zIndex = {
  pageTransition: 9999,
  modal: 1000,
  nav: 100,
  overlay: 99,
  popover: 10,
  above: 4,
  default: 1,
} as const;

export type ZIndexToken = keyof typeof zIndex;
