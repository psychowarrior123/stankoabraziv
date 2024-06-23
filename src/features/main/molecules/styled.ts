import { Box, styled } from '@mui/material'

export const ItemWrapper = styled(Box)`
  padding: 12px 10px;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 8px;

  &:hover {
   box-shadow: ${( {theme} ) => theme.shadows[10]}
  }
`
