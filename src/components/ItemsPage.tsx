import { Box, CircularProgress } from '@mui/material'
import { FC, useLayoutEffect } from 'react'
import { useParams } from 'react-router'
import { Layout } from '../features/layout/Layout'
import { useGetData } from '../hooks'
import { Items } from './organisms/Items'
import { Feature } from './types'

export const ItemsPage: FC = () => {
  const { type, category } = useParams<{ type: Feature; category: Feature }>()

  const { data, getData, isLoading } = useGetData()

  useLayoutEffect(() => {
    getData('items', category)
  }, [category])

  return (
    <Layout currentFeature={type!}>
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        data && <Items items={data[type!]} withLink />
      )}
    </Layout>
  )
}
