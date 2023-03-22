const Breadcrumbs = theme => {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          '& a': {
            textDecoration: 'none',
            color: theme.palette.primary.main
          }
        },
        li: {
          color: theme.palette.text.secondary,
          '& .MuiTypography-root': {
            color: 'inherit'
          }
        }
      }
    }
  }
}

export default Breadcrumbs
