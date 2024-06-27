import { Grid } from '@mui/material'
import { FC } from 'react'
import { Item } from '../molecules/Item'
import { ToolItem } from '../types'

export const Items: FC<{ items: ToolItem[]; withLink?: boolean }> = ({ items, withLink }) => {
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid key={item.text} item xs={12} sm={6} md={6} lg={4} xl={4}>
          <Item {...item} withLink={withLink} key={item.image} />
        </Grid>
      ))}
    </Grid>
  )
}
