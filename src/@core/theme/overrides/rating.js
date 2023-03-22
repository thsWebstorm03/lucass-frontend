const Rating = theme => {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.warning.main,
          '& svg': {
            flexShrink: 0
          }
        }
      }
    }
  }
}

export default Rating
