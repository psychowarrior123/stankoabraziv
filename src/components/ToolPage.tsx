import { Box, CircularProgress, Grid, Link } from '@mui/material'
import { FC, useLayoutEffect, useMemo } from 'react'
import { useParams } from 'react-router'
import { Layout } from '../features/layout/Layout'
import { useGetData } from '../hooks'
import { Item } from './molecules/Item'
import { Feature } from './types'

export const ToolPage: FC = () => {
  const { category } = useParams<{ type: string; category: Feature }>()

  const { data, getData, isLoading } = useGetData()

  useLayoutEffect(() => {
    getData('main', category)
  }, [category])

  const keys = useMemo(() => Object.keys(data ?? {}), [data])

  return (
    <Layout currentFeature={category!}>
      <Grid container spacing={3}>
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
          data &&
          keys.map((key) => {
            return (
              <Grid key={key} item xs={12} sm={6} md={6} lg={4} xl={4}>
                <Link
                  href={`/${category}/${key}`}
                  onClick={(e) => {
                    if ((e.target as HTMLAnchorElement).classList.contains('showMore')) {
                      e.preventDefault()
                    }
                  }}
                >
                  <Item
                    {...data[key]}
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
            )
          })
        )}
      </Grid>
    </Layout>
  )
}
