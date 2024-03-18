import { Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import links from '../../../data/links.json'
import { CatalogueItem } from '../molecules/CatalogueItem'

export const Catalogue: FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  return (
    <Paper elevation={24} sx={{ p: 8, ...(!matches && { width: 350 }) }}>
      <Stack spacing={4}>
        <Typography variant="H4">Каталог</Typography>
        <Stack>
          {links.main.map(({ href, title, description }) => {
            return !!href && <CatalogueItem category={href} title={title} description={description} />
          })}
        </Stack>
      </Stack>
    </Paper>
  )
}
