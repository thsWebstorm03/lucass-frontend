const Tooltip = theme => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: `rgba(${theme.palette.customColors.main}, 0.9)`,
          color: theme.palette.common[theme.palette.mode === 'light' ? 'white' : 'black']
        },
        arrow: {
          color: `rgba(${theme.palette.customColors.main}, 0.9)`
        }
      }
    }
  }
}

export default Tooltip
