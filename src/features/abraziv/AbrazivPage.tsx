import { FC } from 'react'
import { Layout } from '../layout/Layout'
import { Item } from '../../components/molecules/Item'
import { Grid, Link } from '@mui/material'
import main from './data/abrazivMain.json'

export const AbrazivPage: FC = () => {
  return (
    <Layout currentFeature="diamond">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Link href="/abraziv/zatochnie-krygi-Grand">
            <Item
              {...main['zatochnie-krygi-Grand']}
              sx={{
                borderRadius: 2,
                transition: 'all 0.3s',
                p: 4,
                '&:hover': {
                  boxShadow:
                    '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
                }
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Link href="/abraziv/zatochnie_krygi-carborundum-electrite">
            <Item
              {...main['zatochnie_krygi-carborundum-electrite']}
              sx={{
                borderRadius: 2,
                transition: 'all 0.3s',
                p: 4,
                '&:hover': {
                  boxShadow:
                    '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
                }
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Link href="/abraziv/zatochnie_krygi-TYROLIT">
            <Item
              {...main['zatochnie_krygi-TYROLIT']}
              sx={{
                borderRadius: 2,
                transition: 'all 0.3s',
                p: 4,
                '&:hover': {
                  boxShadow:
                    '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
                }
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Link href="/abraziv/otreznie-krygi">
            <Item
              {...main['otreznie-krygi']}
              sx={{
                borderRadius: 2,
                transition: 'all 0.3s',
                p: 4,
                '&:hover': {
                  boxShadow:
                    '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
                }
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Link href="/abraziv/krygi-benzopili">
            <Item
              {...main['krygi-benzopili']}
              sx={{
                borderRadius: 2,
                transition: 'all 0.3s',
                p: 4,
                '&:hover': {
                  boxShadow:
                    '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
                }
              }}
            />
          </Link>
        </Grid>
      </Grid>
    </Layout>
  )
}
