const Tabs = theme => {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 38,
          '&:not(.MuiTabs-vertical)': {
            borderBottom: `1px solid ${theme.palette.divider}`
          }
        },
        vertical: {
          minWidth: 130,
          marginRight: theme.spacing(4),
          borderRight: `1px solid ${theme.palette.divider}`,
          '& .MuiTab-root': {
            minWidth: 130
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 38,
          padding: theme.spacing(1.75, 5)
        },
        textColorSecondary: {
          '&.Mui-selected': {
            color: theme.palette.text.secondary
          }
        }
      }
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: theme.spacing(6)
        }
      }
    }
  }
}

export default Tabs
