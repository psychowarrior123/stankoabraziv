import { FC } from 'react'
import { Layout } from '../layout/Layout'
import { ContactUsTemplate } from './organisms/ContactUsTemplate'

export const ContactUsPage: FC = () => {
  return (
    <Layout currentFeature="main">
      <ContactUsTemplate />
    </Layout>
  )
}
