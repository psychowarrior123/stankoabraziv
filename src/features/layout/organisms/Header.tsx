import { Stack, StackProps, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router'

export const Header: FC<StackProps> = ({ sx, ...props }) => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  const tablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const navigate = useNavigate()
  return (
    <Stack
      sx={{
        px: 4,
        bgcolor: (theme) => theme.palette.colors.mediumGray,
        ...sx
      }}
      direction="row"
      alignItems="cener"
      justifyContent="space-between"
      spacing={2}
      {...props}
    >
      <img
        src="/logo2.jpg"
        style={{
          borderRadius: '10px',
          marginTop: '20px',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
        onClick={() => {
          navigate('/')
        }}
      />
      <Stack alignItems="center" justifyContent="center" width="100%">
        <Stack spacing={10} alignItems="flex-end">
          <Typography variant={mobile ? 'H6' : tablet ? 'H3' : 'H1'}>
            Станкоабразив приветсвует Вас!
          </Typography>
          <Typography variant={mobile ? 'H6' : tablet ? 'H4' : 'H3'}>+7 (495) 510-42-60</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
