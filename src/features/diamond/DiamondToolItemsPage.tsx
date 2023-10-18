import { FC } from 'react'
import items from './data/diamondItems.json'
import { Layout } from '../layout/Layout'
import { Items } from '../../components/organisms/Items'
import { useParams } from 'react-router'
import { DiamondType } from '../../components/types'

export const DiamondToolItemsPage: FC = () => {
  const { type } = useParams<{ type: DiamondType }>()
  return (
    <Layout currentFeature={type!}>
      <Items items={items[type!]} withLink />
    </Layout>
  )
}
