const DataGrid = theme => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 0,
          color: theme.palette.text.primary,
          '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none'
          }
        },
        toolbarContainer: {
          paddingRight: `${theme.spacing(6)} !important`,
          paddingLeft: `${theme.spacing(3.25)} !important`
        },
        columnHeaders: {
          backgroundColor: theme.palette.customColors.tableHeaderBg
        },
        columnHeader: {
          '&:not(.MuiDataGrid-columnHeaderCheckbox)': {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            '&:first-of-type': {
              paddingLeft: theme.spacing(6)
            }
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(6)
          }
        },
        columnHeaderCheckbox: {
          maxWidth: '58px !important',
          minWidth: '58px !important'
        },
        columnHeaderTitleContainer: {
          padding: 0
        },
        columnHeaderTitle: {
          fontWeight: 600,
          fontSize: '0.75rem',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        },
        columnSeparator: {
          color: theme.palette.divider
        },
        row: {
          '&:last-child': {
            '& .MuiDataGrid-cell': {
              borderBottom: 0
            }
          }
        },
        cell: {
          borderColor: theme.palette.divider,
          '&:not(.MuiDataGrid-cellCheckbox)': {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            '&:first-of-type': {
              paddingLeft: theme.spacing(6)
            }
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(6)
          },
          '&:focus, &:focus-within': {
            outline: 'none'
          }
        },
        cellCheckbox: {
          maxWidth: '58px !important',
          minWidth: '58px !important'
        },
        editInputCell: {
          padding: 0,
          color: theme.palette.text.primary,
          '& .MuiInputBase-input': {
            padding: 0
          }
        },
        footerContainer: {
          borderTop: `1px solid ${theme.palette.divider}`,
          '& .MuiTablePagination-toolbar': {
            paddingLeft: `${theme.spacing(4)} !important`,
            paddingRight: `${theme.spacing(4)} !important`
          },
          '& .MuiTablePagination-displayedRows, & .MuiTablePagination-selectLabel': {
            color: theme.palette.text.primary
          }
        },
        selectedRowCount: {
          margin: 0,
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4)
        }
      }
    }
  }
}

export default DataGrid
