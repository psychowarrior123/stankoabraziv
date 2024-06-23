import { Typography } from '@mui/material'
import { FC, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { useGetData } from '../../../hooks'
import { ItemWrapper } from './styled'

export const CatalogueItem: FC<{ category: string; title: string; description?: string }> = ({
  category,
  title,
  description
}) => {
  const { data, getData } = useGetData()
  const navigate = useNavigate()

  useEffect(() => {
    getData('main', category)
  }, [category])

  const keys = useMemo(() => Object.keys(data ?? {}), [data])

  return (
    <ItemWrapper onClick={() => navigate(`/${category}`)}>
      {<Typography variant="H6">{title}</Typography>}
    </ItemWrapper>
  )
}
