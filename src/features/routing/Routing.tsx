import { Route, Routes } from 'react-router-dom'
import { Main } from '../main/Main'
import { Link, Stack, Typography } from '@mui/material'
import { Layout } from '../layout/Layout'
import { DiamondToolItemsPage } from '../diamond/DiamondToolItemsPage'
import { DiamondPage } from '../diamond/DiamondPage'
import { ContactUsPage } from '../contact-us/ContactUsPage'
import { AbrazivToolItemsPage } from '../abraziv/AbrazivToolItemsPage'
import { AbrazivPage } from '../abraziv/AbrazivPage'

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
      <Route path="/diamond/:type" Component={DiamondToolItemsPage} />
      <Route path="/diamond" Component={DiamondPage} />
      <Route path="/abraziv/:type" Component={AbrazivToolItemsPage} />
      <Route path="/abraziv" Component={AbrazivPage} />
      <Route path="/contact-us" Component={ContactUsPage} />
      <Route path="/" Component={Main} />
    </Routes>
  )
}
