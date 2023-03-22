const Switch = theme => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 54,
          height: 42,
          '& .MuiSwitch-track': {
            width: 30,
            height: 18,
            opacity: 1,
            borderRadius: 30,
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.text.disabled}`,
            transition: 'box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out'
          }
        },
        switchBase: {
          top: 5,
          left: 6,
          padding: `${theme.spacing(2.5)} !important`,
          color: `rgba(${theme.palette.customColors.main}, 0.6)`,
          transition: 'left 0.15s ease-in-out, transform 0.15s ease-in-out, color 0.15s ease-in-out',
          '&:hover': {
            backgroundColor: 'transparent !important'
          },
          '&.Mui-disabled': {
            opacity: 0.4,
            color: theme.palette.text.disabled,
            '& + .MuiSwitch-track': {
              opacity: 0.5
            },
            '&.Mui-checked': {
              opacity: theme.palette.mode === 'dark' ? 0.5 : 0.9,
              '& + .MuiSwitch-track': {
                opacity: 0.3,
                boxShadow: 'none'
              }
            }
          },
          '&.Mui-checked': {
            transform: 'translateX(11px)',
            color: `${theme.palette.common.white} !important`,
            '& + .MuiSwitch-track': {
              opacity: 1,
              borderColor: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.main,
              boxShadow: `0 2px 3px 0 rgba(${
                theme.palette.mode === 'light' ? theme.palette.customColors.main : '12, 16, 27'
              }, 0.16)`
            },
            '&.MuiSwitch-colorSecondary + .MuiSwitch-track': {
              borderColor: theme.palette.secondary.main,
              backgroundColor: theme.palette.secondary.main
            },
            '&.MuiSwitch-colorSuccess + .MuiSwitch-track': {
              borderColor: theme.palette.success.main,
              backgroundColor: theme.palette.success.main
            },
            '&.MuiSwitch-colorError + .MuiSwitch-track': {
              borderColor: theme.palette.error.main,
              backgroundColor: theme.palette.error.main
            },
            '&.MuiSwitch-colorWarning + .MuiSwitch-track': {
              borderColor: theme.palette.warning.main,
              backgroundColor: theme.palette.warning.main
            },
            '&.MuiSwitch-colorInfo + .MuiSwitch-track': {
              borderColor: theme.palette.info.main,
              backgroundColor: theme.palette.info.main
            }
          }
        },
        thumb: {
          width: 12,
          height: 12,
          boxShadow: 'none'
        },
        sizeSmall: {
          width: 38,
          height: 30,
          '& .MuiSwitch-track': {
            width: 24,
            height: 16
          },
          '& .MuiSwitch-thumb': {
            width: 10,
            height: 10
          },
          '& .MuiSwitch-switchBase': {
            top: 4,
            left: 5,
            padding: `${theme.spacing(1.5)} !important`,
            '&.Mui-checked': {
              transform: 'translateX(7px)'
            }
          }
        }
      }
    }
  }
}

export default Switch
