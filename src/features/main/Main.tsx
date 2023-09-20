import { FC } from "react";
import { Button, Link, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Layout } from "../layout/Layout";
import { Catalogue } from "./organisms/Catalogue";
import { GeneralBlock } from "./organisms/GeneralBlock";

export const Main: FC = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
    return <Layout>
        <Stack spacing={2} direction={matches ? "column" : "row"}>
            <Catalogue />
            <GeneralBlock />
        </Stack>
    </Layout>
}