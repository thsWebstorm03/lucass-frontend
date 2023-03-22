// ** Theme Config Imports
import themeConfig from 'src/configs/themeConfig'

const Button = theme => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          lineHeight: 1.7143,
          letterSpacing: '0.43px',
          padding: `${theme.spacing(1.75, 5)}`
        },
        contained: {
          boxShadow: theme.shadows[2],
          padding: `${theme.spacing(1.75, 5)}`
        },
        outlined: {
          padding: `${theme.spacing(1.5, 4.75)}`
        },
        sizeSmall: {
          lineHeight: 1.53846,
          borderRadius: '4px',
          padding: `${theme.spacing(1, 3.5)}`,
          '&.MuiButton-contained': {
            padding: `${theme.spacing(1, 3.5)}`
          },
          '&.MuiButton-outlined': {
            padding: `${theme.spacing(0.75, 3.25)}`
          }
        },
        sizeLarge: {
          lineHeight: 2,
          borderRadius: '8px',
          padding: `${theme.spacing(2.25, 6.5)}`,
          '&.MuiButton-contained': {
            padding: `${theme.spacing(2.25, 6.5)}`
          },
          '&.MuiButton-outlined': {
            padding: `${theme.spacing(2, 6.25)}`
          }
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: themeConfig.disableRipple
      }
    }
  }
}

export default Button
