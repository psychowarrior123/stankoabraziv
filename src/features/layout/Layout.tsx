import { Breadcrumbs, Container, Link, Stack, StackProps, Typography } from '@mui/material'
import { FC, useLayoutEffect, useMemo } from 'react'
import { Title } from 'react-head'
import { useLocation } from 'react-router'
import { Feature } from '../../components/types'
import links from '../../data/links.json'
import translate from '../../data/translate.json'
import { useGetData } from '../../hooks'
import { Footer } from './organisms/Footer'
import { Header } from './organisms/Header'
import { pathToCurrent } from './utils'

export const Layout: FC<{ currentFeature: Feature } & StackProps> = ({
  currentFeature,
  children,
  sx,
  ...props
}) => {
  const location = useLocation()
  const breadcrumbs = useMemo(
    () => [
      ...(location.state?.prevPath ? location.state?.prevPath.split('/').filter(Boolean) : []),
      ...location.pathname.split('/').filter(Boolean)
    ],
    [location]
  )

  const { data, getData, isLoading } = useGetData()

  useLayoutEffect(() => {
    getData('main', breadcrumbs[0])
  }, [breadcrumbs])

  return (
    <>
      <Title>{`${!!translate[currentFeature] ? `${translate[currentFeature]} | ` : ''}Станкоабразив`}</Title>
      <Stack
        sx={{
          bgcolor: (theme) => theme.palette.colors.gray,
          width: '100%',
          minHeight: '100vh'
        }}
      >
        <Header />
        {location.pathname !== '/' && (
          <Breadcrumbs sx={{ padding: 8 }}>
            <Link href="/">Главная</Link>
            {breadcrumbs.map((item, index, self) => {
              const isLast = index === self.length - 1
              const href = pathToCurrent(breadcrumbs, item)
              const value =
                links.main.find((link) => link.href === item)?.title ??
                data?.[item as Feature]?.title ??
                translate[item as Feature]
              return isLast ? (
                <Typography key={item}>{value}</Typography>
              ) : (
                <Link href={href} key={item}>
                  {value}
                </Link>
              )
            })}
          </Breadcrumbs>
        )}
        <Container
          maxWidth="xl"
          disableGutters
          sx={{
            px: 8,
            py: 4,
            flexGrow: 1
          }}
        >
          {children}
        </Container>
        <Footer />
      </Stack>
    </>
  )
}
