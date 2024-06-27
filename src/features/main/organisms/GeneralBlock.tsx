import {
  Autocomplete,
  capitalize,
  Link as MuiLink,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ToolItem } from '../../../components/types'
import * as items from '../../../data/items'
import popular from '../../../data/popular.json'

export const GeneralBlock: FC = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  const location = useLocation()

  return (
    <Paper elevation={24} sx={{ p: 8, ...(!matches && { width: '100%' }) }}>
      <Stack spacing={4}>
        <Autocomplete
          freeSolo
          options={Object.values((items as unknown) as ToolItem[][]).flat()}
          getOptionLabel={(option) => (option as ToolItem).title}
          renderInput={(params) => <TextField {...params} placeholder="Поиск" />}
          renderOption={(props, option, { inputValue }) => {
            const matches = match(option.title, inputValue, { insideWords: true })
            const parts = parse(option.title, matches)
            return (
              <Link
                to="/contact-us"
                style={{
                  textDecoration: 'none'
                }}
                state={{
                  item: `${capitalize(option.title)} ${capitalize(option.text)}`,
                  prevPath: location.pathname,
                  entity: option
                }}
              >
                <li {...props}>
                  {parts.map((part, index) => (
                    <Typography
                      key={index}
                      sx={{
                        fontWeight: part.highlight ? 700 : 400
                      }}
                    >
                      {part.text}
                    </Typography>
                  ))}
                </li>
              </Link>
            )
          }}
        />
        <Stack width="100%" alignItems="center" spacing={2}>
          <Typography variant="H3">Популярные товары</Typography>
          <Stack direction="row" gap={2} flexWrap="wrap">
            {popular.map((item) => (
              <Link
                to="/contact-us"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: 10
                }}
                state={{
                  item: `${capitalize(item.title)} ${capitalize(item.text)}`,
                  prevPath: location.pathname,
                  entity: item
                }}
                key={`${item.title} ${item.text}`}
              >
                <img height={matches ? 200 : 300} src={item.image} alt={item.image} />
                <MuiLink sx={{ wordWrap: 'break-word', maxWidth: matches ? 200 : 300 }}>
                  {capitalize(item.title)}
                </MuiLink>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}
