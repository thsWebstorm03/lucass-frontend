// ** MUI Imports
import Box from '@mui/material/Box'
import TreeView from '@mui/lab/TreeView'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import TreeItem from '@mui/lab/TreeItem'

// ** Custom Icon Import
import Icon from 'src/@core/components/icon'

// Styled TreeItem component
const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  '&:hover > .MuiTreeItem-content:not(.Mui-selected)': {
    backgroundColor: theme.palette.action.hover
  },
  '& .MuiTreeItem-content': {
    paddingRight: theme.spacing(3),
    borderTopRightRadius: theme.spacing(4),
    borderBottomRightRadius: theme.spacing(4),
    fontWeight: theme.typography.fontWeightMedium
  },
  '& .MuiTreeItem-label': {
    fontWeight: 'inherit',
    paddingRight: theme.spacing(3)
  },
  '& .MuiTreeItem-group': {
    marginLeft: 0,
    '& .MuiTreeItem-content': {
      paddingLeft: theme.spacing(4),
      fontWeight: theme.typography.fontWeightRegular
    }
  }
}))

const StyledTreeItem = props => {
  // ** Props
  const { labelText, labelIcon, labelInfo, ...other } = props

  return (
    <StyledTreeItemRoot
      {...other}
      label={
        <Box sx={{ py: 1, display: 'flex', alignItems: 'center', '& svg': { mr: 1 } }}>
          <Icon icon={labelIcon} color='inherit' />
          <Typography variant='body2' sx={{ flexGrow: 1, fontWeight: 'inherit' }}>
            {labelText}
          </Typography>
          {labelInfo ? (
            <Typography variant='caption' color='inherit'>
              {labelInfo}
            </Typography>
          ) : null}
        </Box>
      }
    />
  )
}

const TreeViewGmailClone = ({ direction }) => {
  const ExpandIcon = <Icon icon={direction === 'rtl' ? 'tabler:chevron-left' : 'tabler:chevron-right'} />

  return (
    <TreeView
      sx={{ minHeight: 240 }}
      defaultExpanded={['3']}
      defaultExpandIcon={ExpandIcon}
      defaultCollapseIcon={<Icon icon='tabler:chevron-down' />}
    >
      <StyledTreeItem nodeId='1' labelText='All Mail' labelIcon='tabler:mail' />
      <StyledTreeItem nodeId='2' labelText='Trash' labelIcon='tabler:trash' />
      <StyledTreeItem nodeId='3' labelText='Categories' labelIcon='tabler:badge'>
        <StyledTreeItem nodeId='5' labelInfo='90' labelText='Social' labelIcon='tabler:users' />
        <StyledTreeItem nodeId='6' labelInfo='2,294' labelText='Updates' labelIcon='tabler:info-circle' />
        <StyledTreeItem nodeId='7' labelInfo='3,566' labelText='Forums' labelIcon='tabler:messages' />
        <StyledTreeItem nodeId='8' labelInfo='733' labelText='Promotions' labelIcon='tabler:tag' />
      </StyledTreeItem>
      <StyledTreeItem nodeId='4' labelText='History' labelIcon='tabler:badge' />
    </TreeView>
  )
}

export default TreeViewGmailClone
