import {
  capitalize,
  Link as MuiLink,
  Stack,
  StackProps,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { FC } from 'react'
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
  return (
    <Stack direction={matches ? 'column' : 'row'} spacing={2} {...props}>
      <img src={image} width={200} height={200} style={{ borderRadius: '8px' }} alt={image} />
      <Stack spacing={2}>
        <Typography variant="H6">{capitalize(title)}</Typography>
        <Typography variant="body">{capitalize(text)}</Typography>
        {subtext && <Typography variant="caption">{capitalize(subtext)}</Typography>}
        {withLink && (
          <Link
            to="/contact-us"
            style={{ textDecoration: 'none' }}
            state={{ item: `${capitalize(title)} ${capitalize(text)}`, prevPath: location.pathname }}
          >
            <MuiLink>Узнать о наличии и стоимость</MuiLink>
          </Link>
        )}
      </Stack>
    </Stack>
  )
}
