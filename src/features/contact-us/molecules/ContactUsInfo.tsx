import { Grid, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import LayersIcon from '@mui/icons-material/Layers'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'

export const ContactUsInfo: FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Stack spacing={4} sx={{ maxWidth: 540 }} alignItems="center" justifyContent="center">
      <Typography variant="H3">УЗНАТЬ СТОИМОСТЬ</Typography>
      <Typography variant="H5" textAlign="center">
        Для того,чтобы узнать стоимость,вы можете отправить нам через сайт заявку (ответ приходит в течении
        5-10 минут) или связаться с нами напрямую через номер телефона или почту! (достаточно просто нажать на
        картинку)
      </Typography>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            borderBottom: '1px solid black',
            ...(!matches && { borderRight: '1px solid black' })
          }}
        >
          <Stack p={4} spacing={4} alignItems="center" justifyContent="center">
            <LayersIcon sx={{ fontSize: 50 }} />
            <Typography variant="H6" textAlign="center">
              УКАЖИТЕ АССОРТИМЕНТ, КОЛ-ВО ТОВАРА И РАЗМЕР
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            borderBottom: '1px solid black'
          }}
        >
          <Stack p={4} spacing={4} alignItems="center" justifyContent="center">
            <AccessTimeIcon sx={{ fontSize: 50 }} />
            <Typography variant="H6" textAlign="center">
              ВРЕМЯ ОТВЕТА 5-10 МИНУТ
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            ...(matches ? { borderBottom: '1px solid black' } : { borderRight: '1px solid black' })
          }}
        >
          <Stack p={4} spacing={4} alignItems="center" justifyContent="center">
            <LocalPhoneIcon sx={{ fontSize: 50 }} />
            <Stack spacing={1}>
              <Typography variant="H6" textAlign="center">
                ПОЗВОНИТЬ
              </Typography>
              <Link href="tel:+74955104260" sx={{ transition: 'all 0.3s' }}>
                +7 (495) 510-42-60
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Stack p={4} spacing={4} alignItems="center" justifyContent="center">
            <EmailIcon sx={{ fontSize: 50 }} />
            <Stack spacing={1}>
              <Typography variant="H6" textAlign="center">
                НАПИСАТЬ НА ПОЧТУ
              </Typography>
              <Link href="mailto:stankoabraziv@list.ru" sx={{ transition: 'all 0.3s' }}>
                stankoabraziv@list.ru
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
