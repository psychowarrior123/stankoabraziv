import { FC } from "react";
import { Layout } from "../layout/Layout";
import { Item } from "./molecules/Item";
import { Grid, Link } from "@mui/material";
import main from './data/diamondMain.json'

export const DiamondPage: FC = () => {
 return <Layout>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
     <Link href='/diamond/cbn'>
     <Item
      {...main.cbn}
      withLink
      sx={{
       borderRadius: 2,
       transition: 'all 0.3s',
       p: 4,
       '&:hover': {
        boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
       }
      }}
     />
     </Link>
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
     <Link href='/diamond/cup'>
      <Item
      {...main.cup}
      withLink
      sx={{
       borderRadius: 2,
       transition: 'all 0.3s',
       p: 4,
       '&:hover': {
        boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
       }
      }}
     />
     </Link>
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
     <Link href='/diamond/disc'>
      <Item
      {...main.disc}
      withLink
      sx={{
       borderRadius: 2,
       transition: 'all 0.3s',
       p: 4,
       '&:hover': {
        boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
       }
      }}
     />
     </Link>
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
     <Link href='/diamond/straight'>
      <Item
      {...main.straight}
      withLink
      sx={{
       borderRadius: 2,
       transition: 'all 0.3s',
       p: 4,
       '&:hover': {
        boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
       }
      }}
     />
     </Link>
    </Grid>
  </Grid>
 </Layout>
}