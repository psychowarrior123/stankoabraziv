import { Stack, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import { Layout } from '../layout/Layout'
import { Brands } from './organisms/Brands'
import { Catalogue } from './organisms/Catalogue'
import { GeneralBlock } from './organisms/GeneralBlock'
import { Markets } from './organisms/Markets'

export const Main: FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  return (
    <Layout currentFeature="main">
      <Stack spacing={2}>
        <Markets />
        <Stack spacing={2} direction={matches ? 'column' : 'row'}>
          <Catalogue />
          <GeneralBlock />
        </Stack>
        <Brands />
      </Stack>
    </Layout>
  )
}
