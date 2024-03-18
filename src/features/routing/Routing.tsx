import { Route, Routes } from 'react-router-dom'
import { Link, Stack, Typography } from '@mui/material'
import { Layout } from '../layout/Layout'
import { ItemsPage } from '../../components/ItemsPage'
import { ToolPage } from '../../components/ToolPage'
import { ContactUsPage } from '../contact-us/ContactUsPage'
import { Main } from '../main/Main'

const Urina: React.FC = () => {
  return (
    <Layout currentFeature="main">
      <Stack alignItems="center" justifyContent="center" spacing={4}>
        <Typography variant="H1">ЭТО ССАНИНА</Typography>
        <img src="/ssanina_psa.jpg" />
        <Link href="/">ДОМОЙ НАХУЙ</Link>
      </Stack>
    </Layout>
  )
}

const Sucks: React.FC = () => {
  return (
    <Layout currentFeature="main">
      <Stack alignItems="center" justifyContent="center" spacing={4}>
        <Typography variant="H1">ЭТО ГОВНО</Typography>
        <img src="/govno.jpg" />
        <Link href="/">ДОМОЙ НАХУЙ</Link>
      </Stack>
    </Layout>
  )
}

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/urina" Component={Urina} />
      <Route path="/sucks" Component={Sucks} />
      <Route path="/:category/:type" Component={ItemsPage} />
      <Route path="/:category" Component={ToolPage} />
      <Route path="/contact-us" Component={ContactUsPage} />
      <Route path="/" Component={Main} />
    </Routes>
  )
}
