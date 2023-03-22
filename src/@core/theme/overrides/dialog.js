const Dialog = (theme, skin) => {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: theme.shadows[skin === 'bordered' ? 0 : 9],
          ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` }),
          '&:not(.MuiDialog-paperFullScreen)': {
            [theme.breakpoints.down('sm')]: {
              margin: theme.spacing(4),
              width: `calc(100% - ${theme.spacing(8)})`,
              maxWidth: `calc(100% - ${theme.spacing(8)}) !important`
            }
          },
          '& > .MuiList-root': {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
          }
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5, 6, 1)
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: `${theme.spacing(5, 6)} !important`
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1, 6, 5),
          '&.dialog-actions-dense': {
            padding: theme.spacing(1, 2.5, 2.5)
          }
        }
      }
    }
  }
}

export default Dialog
