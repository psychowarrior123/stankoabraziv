import { Link, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC, useMemo } from 'react'

export const Markets: FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  const height = useMemo(() => (matches ? 100 : 200), [matches])
  return (
    <Paper elevation={24} sx={{ p: 8 }}>
      <Stack width="100%" alignItems="center" justifyContent="center" spacing={2}>
        <Typography variant={matches ? 'H6' : 'H4'}>
          Физические лица могут приобрести нашу продукцию, нажав на баннер предложенных ниже сетей:
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center" justifyContent="center">
          <Link
            href="https://www.ozon.ru/seller/ooo-td-stankoabraziv-1276770/products/?miniapp=seller_1276770"
            target="_blank"
          >
            <img height={height} src="/marketplaces/ozon.jpg" alt="ozon.jpg" />
          </Link>
          <Link href="https://www.wildberries.ru/brands/311209334-stanko-abraziv" target="_blank">
            <img height={height} src="/marketplaces/wildberries.jpg" alt="wildberries.jpg" />
          </Link>
          <Link href="https://market.yandex.ru/business--stankoabraziv/93420924" target="_blank">
            <img height={height} src="/marketplaces/yandex.jpg" alt="yandex.jpg" />
          </Link>
          <Link
            href="https://www.avito.ru/brands/f0d8657a6e5355657b855bbb2f304329/all?gdlkerfdnwq=101&page_from=from_item_card_icon&iid=2690917917&sellerId=e05d31b6616c04ace04f93b0af873dc1"
            target="_blank"
          >
            <img height={height} src="/marketplaces/avito.jpg" alt="avito.jpg" />
          </Link>
          <Link
            href="https://www.ozon.ru/seller/ooo-stanko-abraziv-1505833/products/?miniapp=seller_1505833"
            target="_blank"
          >
            <img height={height} src="/marketplaces/ozonNDS.jpg" alt="ozonNDS.jpg" />
          </Link>
        </Stack>
      </Stack>
    </Paper>
  )
}
