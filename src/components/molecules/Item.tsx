import {
  capitalize,
  Collapse,
  Link as MuiLink,
  Stack,
  StackProps,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ToolItem } from '../types'

export const Item: FC<ToolItem & { withLink?: boolean } & StackProps> = ({
  image,
  title,
  text,
  subtext,
  withLink,
  ...props
}) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  const location = useLocation()
  const collapsedHeight = useMemo(() => (withLink ? 170 - 30 : 170), [withLink])
  const [checked, setChecked] = useState<boolean>(false)
  const [contentHeight, setContentHeight] = useState<number>(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight)
    }
    const listener = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight)
      }
    }
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  })

  return (
    <Stack direction={matches ? 'column' : 'row'} alignItems="flex-start" spacing={2} {...props}>
      <img src={image} width={200} style={{ borderRadius: '8px', shapeOutside: image }} alt={image} />
      <Stack spacing={2}>
        <Collapse in={checked} collapsedSize={collapsedHeight}>
          <Stack spacing={2} ref={contentRef}>
            <Typography variant="H6">{capitalize(title)}</Typography>
            <Typography variant="body">{capitalize(text)}</Typography>
            {subtext && <Typography variant="caption">{capitalize(subtext)}</Typography>}
          </Stack>
        </Collapse>
        {contentHeight > collapsedHeight && (
          <Typography
            variant="H6"
            onClick={(e) => {
              setChecked((prevState) => !prevState)
            }}
            className="showMore"
            sx={{ width: '100%', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
          >
            {checked ? 'Скрыть' : 'Подробнее'}
          </Typography>
        )}
        {withLink && (
          <Link
            to="/contact-us"
            style={{ textDecoration: 'none' }}
            state={{
              item: `${capitalize(title)} ${capitalize(text)}`,
              prevPath: location.pathname,
              entity: { title, image, text, subtext }
            }}
          >
            <MuiLink>Узнать о наличии и стоимость</MuiLink>
          </Link>
        )}
      </Stack>
    </Stack>
  )
}
