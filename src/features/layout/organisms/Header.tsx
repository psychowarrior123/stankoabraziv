import { Box, Link, Stack, StackProps, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router";

export const Header: FC<StackProps> = ({ sx, ...props }) => {
    const navigate = useNavigate()
    return <Stack
        sx={{
            px: 4,
            bgcolor: (theme) => theme.palette.colors.mediumGray,
            ...sx
        }}
        direction="row"
        alignItems="cener"
        justifyContent="space-between"
        {...props}
    >
        <img
            src='/logo.png'
            style={{
                borderRadius: '10px',
                marginTop: '20px',
                marginBottom: '20px'
            }}
        />
        <Stack spacing={2} alignItems="flex-end">
            <Typography variant="H2">Станкоабразив приветсвует Вас! Мистер хуйло!</Typography>
            <Typography variant="H3">+7 (495) 510-42-60</Typography>

        </Stack>
        <Stack direction="row">
            <Stack
                px={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                    height: '100%',
                    cursor: 'pointer',
                    '&:hover':
                    {
                        bgcolor: (theme) => theme.palette.colors.backgroundBlack05,
                        span:
                            { color: (theme) => theme.palette.colors.white }
                    },
                    transition: 'all 0.3s'
                }}
                onClick={() => {
                    navigate('/urina')
                }}
            >
                <Typography variant="button1">Ссанина</Typography>
            </Stack>
            <Stack
                px={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                    height: '100%',
                    cursor: 'pointer',
                    '&:hover':
                    {
                        bgcolor: (theme) => theme.palette.colors.backgroundBlack05,
                        span:
                            { color: (theme) => theme.palette.colors.white }
                    },
                    transition: 'all 0.3s'
                }}
                onClick={() => {
                    navigate('/sucks')
                }}
            >
                <Typography variant="button1">Говно</Typography>
            </Stack>
            <Stack
                px={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                    height: '100%',
                    cursor: 'pointer',
                    '&:hover':
                    {
                        bgcolor: (theme) => theme.palette.colors.backgroundBlack05,
                        span:
                            { color: (theme) => theme.palette.colors.white }
                    },
                    transition: 'all 0.3s'
                }}
                onClick={() => {
                    navigate('/')
                }}
            >
                <Typography variant="button1">Домой нахуй</Typography>
            </Stack>
        </Stack>
    </Stack >
}