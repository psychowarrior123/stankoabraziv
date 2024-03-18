import { FC, useLayoutEffect } from 'react'
import { useParams } from 'react-router'
import { Feature } from './types'
import { Layout } from '../features/layout/Layout'
import { Items } from './organisms/Items'
import { useGetData } from '../hooks'
import { Box, CircularProgress } from '@mui/material'

export const ItemsPage: FC = () => {
  const { type, category } = useParams<{ type: Feature; category: Feature }>()

  const { data, getData, isLoading } = useGetData()

  useLayoutEffect(() => {
    getData('items', category)
  }, [category])

  console.log(data, category)

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
