import { FC } from "react";
import items from "./data/diamondItems.json"
import { Layout } from "../layout/Layout";
import { Items } from "./organisms/Items";
import { useParams } from "react-router";
import { ToolType } from "./types";

export const DiamondToolItemsPage: FC = () => {
 const { type } = useParams<{ type: ToolType }>()
 return <Layout>
  <Items items={items[type!]} />
 </Layout>
}