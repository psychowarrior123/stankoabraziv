const baseFontPreset = {
  fontStyle: "normal",
  letterSpacing: "-0.02rem",
  fontFamily: "Arial",
};

export const fontPresets = {
  H1: {
    fontFamily: "Arial",
    fontWeight: 900,
    fontSize: "52px",
    lineHeight: "40px",
    fontStyle: "normal",
    letterSpacing: "0.05em",
  },
  H2: {
    fontFamily: "Arial",
    fontWeight: 900,
    fontSize: "32px",
    lineHeight: "40px",
    fontStyle: "normal",
    letterSpacing: "0.05em",
  },
  H3: {
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "30px",
    ...baseFontPreset,
  },
  H4: {
    fontWeight: 600,
    fontSize: "25px",
    lineHeight: "30px",
    ...baseFontPreset,
  },
  H5: {
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "25px",
    ...baseFontPreset,
  },
  H6: {
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "20px",
    ...baseFontPreset,
  },
  customHeading: {
    fontFamily: "Body Text Large",
    fontWeight: 400,
    fontSize: "15.3px",
    lineHeight: "14px",
    letterSpacing: "0.05em",
  },
  body: {
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "20px",
    ...baseFontPreset,
  },
  button1: {
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "25px",
    ...baseFontPreset,
  },
  button2: {
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "20px",
    ...baseFontPreset,
  },
  caption: {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "20px",
    ...baseFontPreset,
  },
  error: {
    fontWeight: 600,
    fontSize: "100px",
    lineHeight: "100px",
    ...baseFontPreset,
  },
  label: {
    ...baseFontPreset,
    fontWeight: 900,
    fontSize: "12px",
    lineHeight: "100%",
    letterSpacing: "1.5px",
    textTransform: "uppercase" as any,
  },
};

export type TFonts = {
  [K in keyof typeof fontPresets]: React.CSSProperties;
};

export const typographySettings = {
  fontFamily: ["Arial"].join(","),
  allVariants: { color: "#000000" },
};

export const typography = {
  ...typographySettings,
  ...fontPresets,
};
