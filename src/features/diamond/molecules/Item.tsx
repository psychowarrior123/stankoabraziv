import { FC } from "react";
import { ToolItem } from "../types";
import {Link as MuiLink, Stack, StackProps, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export const Item: FC<ToolItem & { withLink?: boolean } & StackProps> = ({ image, title, text, subtext, withLink, ...props }) => {
 const theme = useTheme()
 const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
 return <Stack direction={matches ? "column" : "row"} spacing={2} {...props}>
  <img src={image} width={200} height={200} style={{ borderRadius: '8px' }} />
  <Stack spacing={2}>
   <Typography variant="H6">{title}</Typography>
   <Typography variant="body">{text}</Typography>
   {subtext && <Typography variant="caption">{subtext}</Typography>}
   {withLink && <Link to='/contact-us' style={{ textDecoration: 'none' }} state={{ item: `${title} ${text}` }}><MuiLink>Узнать размер и стоимость</MuiLink></Link>}
  </Stack>
 </Stack>
}