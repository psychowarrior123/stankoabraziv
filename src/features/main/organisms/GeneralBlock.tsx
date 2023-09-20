import { Breadcrumbs, Input, Link, Paper, Stack, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

export const GeneralBlock: FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  return <Paper elevation={24} sx={{p: 8, ...(!matches && { width: "100%"})}}>
    <Stack spacing={4}>
      <Breadcrumbs>
        <Link href="/">Главная</Link>
        <Link href="/urina">Ссанина</Link>
        <Link href="/sucks">Говно</Link>
      </Breadcrumbs>
      <TextField placeholder="Ищи-ищи... Заебешься искать" />
      <Stack width="100%" alignItems="center" spacing={2}>
        <Typography variant="H3">
          Популярные товары
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap">
          <img width={matches ? 200 : 300} height={matches ? 200 : 300} src="/popular_grand_bekelit.jpg" />
          <img width={matches ? 200 : 300} height={matches ? 200 : 300} src="/popular_grand_premium.jpg" />
          <img width={matches ? 200 : 300} height={matches ? 200 : 300} src="/popular_polotno.jpg" />
          <img width={matches ? 200 : 300} height={matches ? 200 : 300} src="/slave.jpeg" />
        </Stack>
      </Stack>
    </Stack>
  </Paper>
}