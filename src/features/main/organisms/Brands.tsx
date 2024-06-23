import { Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'

export const Brands: FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  return (
    <Paper elevation={24} sx={{ p: 8 }}>
      <Stack width="100%" alignItems="center" justifyContent="center" spacing={2}>
        <Typography variant="H3">Наши партнеры</Typography>
        <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center" justifyContent="center">
          <img height={matches ? 200 : 300} src="/brand_woodtec.jpg" alt="brand_woodtec.jpg" />
          <img height={matches ? 200 : 300} src="/brand_tyrolit.png" alt="brand_tyrolit" />
          <img height={matches ? 200 : 300} src="/brand_leuco.jpg" alt="brand_leuco" />
          <img height={matches ? 200 : 300} src="/diskovye-pili/ironmac.jpg" alt="ironmac.jpg" />
          <img height={matches ? 200 : 300} src="/diskovye-pili/aspigass.png" alt="aspigass.png" />
        </Stack>
      </Stack>
    </Paper>
  )
}
