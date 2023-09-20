import { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'
import { Main } from '../main/Main'
import { Link, Stack, Typography } from '@mui/material'
import { Layout } from '../layout/Layout'

const Urina: React.FC = () => {
    return <Layout>
        <Stack alignItems="center" justifyContent="center" spacing={4}>
            <Typography variant='H1'>ЭТО ССАНИНА</Typography>
            <img src='/ssanina_psa.jpg' />
            <Link href='/'>ДОМОЙ НАХУЙ</Link>
        </Stack>
    </Layout>
}

const Sucks: React.FC = () => {
    return <Layout>
        <Stack alignItems="center" justifyContent="center" spacing={4}>
            <Typography variant='H1'>ЭТО ГОВНО</Typography>
            <img src='/govno.jpg' />
            <Link href='/'>ДОМОЙ НАХУЙ</Link>
        </Stack>
    </Layout>
}


export const Routing: React.FC = () => {
    return <Routes>
        <Route path='/urina' Component={Urina} />
        <Route path='/sucks' Component={Sucks} />
        <Route path='/' Component={Main} />
    </Routes>
}