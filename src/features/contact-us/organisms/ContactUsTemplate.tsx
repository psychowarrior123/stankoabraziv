import { Box, Stack, useMediaQuery, useTheme } from "@mui/material"
import { FC } from "react"
import { ContactUsForm } from "../molecules/ContactUsForm"
import { ContactUsInfo } from "../molecules/ContactUsInfo"

export const ContactUsTemplate: FC = () => {
 const theme = useTheme()
 const matches = useMediaQuery(theme.breakpoints.down('sm'))
 return <Stack spacing={8} direction={matches ? 'column' : 'row'} alignItems="center" justifyContent="center">
  {matches && <ContactUsInfo />}
  <ContactUsForm />
  {!matches && <ContactUsInfo />}
 </Stack>
}