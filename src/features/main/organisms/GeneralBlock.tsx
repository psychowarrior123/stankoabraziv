import {
  Autocomplete,
  Breadcrumbs,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { FC } from 'react'
import { DiamondType } from '../../../components/types'
import links from '../../../data/links.json'
import diamondItems from '../../../data/items/diamondItems.json'

export const GeneralBlock: FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  return (
    <Paper elevation={24} sx={{ p: 8, ...(!matches && { width: '100%' }) }}>
      <Stack spacing={4}>
        <Breadcrumbs>
          {links.main.map((link) => {
            return (
              <Link href={`/${link.href}`} key={link.href}>
                {link.title}
              </Link>
            )
          })}
        </Breadcrumbs>
        <Autocomplete
          freeSolo
          options={Object.keys(diamondItems)
            .map((key) => diamondItems[key as DiamondType].map((item) => `${item.title} ${item.text}`))
            .flat(Infinity)}
          renderInput={(params) => <TextField {...params} placeholder="Поиск" />}
        />
        <Stack width="100%" alignItems="center" spacing={2}>
          <Typography variant="H3">Популярные товары</Typography>
          <Stack direction="row" gap={2} flexWrap="wrap">
            <img
              width={matches ? 200 : 300}
              height={matches ? 200 : 300}
              src="/popular_tovari/elbor_popular.png"
              alt="elbor_popular.png"
            />
            <img
              width={matches ? 200 : 300}
              height={matches ? 200 : 300}
              src="/popular_tovari/145x3.2-benzpopular.png"
              alt="benzopili_popular.png"
            />
            <img
              width={matches ? 200 : 300}
              height={matches ? 200 : 300}
              src="/popular_tovari/max_popular.jpg"
              alt="max_popular.jpg"
            />
            <img
              width={matches ? 200 : 300}
              height={matches ? 200 : 300}
              src="/popular_tovari/carborundum_popular.jpg"
              alt="carborundum_popular.jpg"
            />
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}
