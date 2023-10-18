import { FC } from 'react'
import { useParams } from 'react-router'
import { Items } from '../../components/organisms/Items'
import { AbrazivType } from '../../components/types'
import { Layout } from '../layout/Layout'
import items from './data/abrazivItems.json'

export const AbrazivToolItemsPage: FC = () => {
  const { type } = useParams<{ type: AbrazivType }>()
  return (
    <Layout currentFeature={type!}>
      <Items items={items[type!]} withLink />
    </Layout>
  )
}
