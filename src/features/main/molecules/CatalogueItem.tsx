import { Typography, AccordionDetails, Link, Accordion, AccordionSummary, Stack } from '@mui/material'
import { FC, useEffect, useMemo } from 'react'
import { useGetData } from '../../../hooks'

export const CatalogueItem: FC<{ category: string; title: string; description?: string }> = ({
  category,
  title,
  description
}) => {
  const { data, getData } = useGetData()

  useEffect(() => {
    getData('main', category)
  }, [category])
  console.log(data, category)

  const keys = useMemo(() => Object.keys(data ?? {}), [data])

  return (
    <Accordion>
      <AccordionSummary>
        <Typography variant="H6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1}>
          {data &&
            keys.map((key) => {
              return <Link href={`/${category}/${key}`}>{data[key].title}</Link>
            })}
          <Typography variant="body" whiteSpace="pre-wrap" style={{ marginTop: !!keys.length ? 20 : 0 }}>
            {description}
          </Typography>
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}
