import { createTheme } from '@mui/material/styles'
import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions
} from '@mui/material/styles/createPalette'

import { TFonts, typography } from './typography'
import { colors, TColors } from './colors'
import { breakpoints } from './breakpoints'

declare module '@mui/material/styles/createPalette' {
  // @ts-ignore
  interface Palette extends MuiPallete {
    colors: TColors
  }

  // @ts-ignore
  interface PaletteOptions extends MuiPaletteOptions {
    colors?: TColors
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants extends TFonts {}

  interface TypographyVariantsOptions extends TFonts {}
}

type TypesToTrue<T> = { [K in keyof T]: true }

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends TypesToTrue<TFonts> {}
}

export const theme = createTheme({
  palette: {
    colors: colors
  },
  breakpoints: {
    values: breakpoints
  },
  spacing: 5,
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.black
        }
      }
    },
    MuiFormLabel: {},
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
        root: {
          color: colors.blue,
          '&:hover': {
            color: colors.hoverBlue
          }
        }
      }
    },
    // MuiChip: {
    //   styleOverrides: {
    //     labelMedium: { ...typography.innoButton2 }
    //   }
    // }
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    }
    //   styleOverrides: {
    //     root: {
    //       textTransform: 'none'
    //     },
    //     containedPrimary: {
    //       background: colors.blue.primary,
    //       '&:hover': {
    //         background: colors.blue.hover
    //       },
    //       '&:active': {
    //         background: colors.blue.focus
    //       }
    //     },
    //     sizeLarge: {
    //       ...typography.innoButton1,
    //       paddingTop: '12px',
    //       paddingBottom: '12px',
    //       borderRadius: '60px'
    //     }
    //   }
    // },
    // MuiAccordion: {
    //   defaultProps: {
    //     disableGutters: true
    //   },
    //   styleOverrides: {
    //     root: {
    //       border: 'none',
    //       boxShadow: 'none',
    //       '&:not(:first-child)': {
    //         marginTop: '20px'
    //       },
    //       '&:before': {
    //         display: 'none'
    //       }
    //     }
    //   }
    // },
    // MuiAccordionSummary: {
    //   styleOverrides: {
    //     root: {
    //       padding: 0,
    //       minHeight: '30px',
    //       fill: colors.gray.primary,
    //       '&:hover': {
    //         fill: colors.blue.hover
    //       }
    //     },
    //     content: {
    //       margin: 0
    //     }
    //   }
    // },
    // MuiAccordionDetails: {
    //   styleOverrides: {
    //     root: {
    //       marginTop: '20px',
    //       padding: 0
    //     }
    //   }
    // }
  },
  typography
})
