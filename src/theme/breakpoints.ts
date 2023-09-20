type ValuesToBoolean<T, V extends boolean> = { [K in keyof T]: V }

export const breakpoints = {
  xs: 0,
  sm: 1024,
  md: 1280,
  lg: 1440,
  xl: 1920
}
