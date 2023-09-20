import { FC } from "react";
import { Button, Link, Paper, Stack, Typography } from '@mui/material'
import { Layout } from "../layout/Layout";

export const Main: FC = () => {
    return <Layout>
        <Stack alignItems="center" justifyContent="center" spacing={2}>
            <Paper sx={{ p: 4, backgroundColor: (theme) => theme.palette.grey[300] }}>
                <Stack alignItems="center" justifyContent="center" spacing={2}>
                    <Typography variant="H1">It's main page</Typography>
                    <Link href="/sucks">ГОВНО</Link>
                    <Link href="/urina">МОЧА</Link>
                    <Button variant="contained" onClick={() => { alert('ПОШЕЛ НАХУЙ АХАХАХА') }}>Кнопка с кайфом</Button>
                </Stack>
            </Paper>
        </Stack>
    </Layout>
}