import { FC } from 'react'
import { ToolItem } from '../types'
import { Grid } from '@mui/material'
import { Item } from '../molecules/Item'

export const Items: FC<{ items: ToolItem[]; withLink?: boolean }> = ({ items, withLink }) => {
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid key={item.text} item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Item {...item} withLink={withLink} />
        </Grid>
      ))}
    </Grid>
  )
}
