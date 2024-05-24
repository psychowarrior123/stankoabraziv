import { useMediaQuery, Paper, Stack, Typography, useTheme } from '@mui/material'
import { FC } from 'react'

export const Brands: FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  return (
    <Paper elevation={24} sx={{ p: 8 }}>
      <Stack width="100%" alignItems="center" justifyContent="center" spacing={2}>
        <Typography variant="H3">Наши партнеры</Typography>
        <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center" justifyContent="center">
          <img width={matches ? 200 : 300} height={matches ? 200 : 300} src="/brand_woodtec.jpg" />
          <img width={matches ? 200 : 300} height={matches ? 200 : 300} src="/brand_tyrolit.png" />
          <img width={matches ? 200 : 300} height={matches ? 200 : 300} src="/brand_leuco.jpg" />
          <img width={matches ? 200 : 300} height={matches ? 200 : 300} src="/diskovye-pili\ironmac.jpg" />
          <img width={matches ? 200 : 300} height={matches ? 200 : 300} src="/diskovye-pili\aspigass.png" />
        </Stack>
      </Stack>
    </Paper>
  )
}
