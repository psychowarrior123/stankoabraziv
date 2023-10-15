import { StackProps, Stack, Typography, Link, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

export const Footer: FC<StackProps> = ({ sx, ...props }) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
    return (
        <Stack
            alignItems="center"
            direction={matches ? "column" : "row"}
            sx={{
                p: 4,
                bgcolor: (theme) => theme.palette.colors.black,
                ...sx
            }}
            justifyContent="space-between"
            spacing={4}
            {...props}
        >
            <Stack direction="row" spacing={3}>
                <Typography variant="H6" color="colors.white">Контакты</Typography>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={1}>
                        <Typography variant="body" color="colors.white">Телефон:</Typography>
                        <Link
                            sx={{
                                color: (theme) => theme.palette.colors.white,
                                '&:hover': { color: (theme) => theme.palette.colors.mediumGray }
                            }}
                            href="tel:+74955104260"
                        >
                            +7 (495) 510-42-60
                        </Link>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Typography variant="body" color="colors.white">Почта:</Typography>
                        <Stack spacing={2}>
                            <Link
                                sx={{
                                    color: (theme) => theme.palette.colors.white,
                                    '&:hover': { color: (theme) => theme.palette.colors.mediumGray }
                                }}
                                href="mailto:stankoabraziv@list.ru"
                            >
                                stankoabraziv@list.ru
                            </Link>
                            <Link
                                sx={{
                                    color: (theme) => theme.palette.colors.white,
                                    '&:hover': { color: (theme) => theme.palette.colors.mediumGray }
                                }}
                                href="mailto:Stanko_abraziv@bk.ru"
                            >
                                Stanko_abraziv@bk.ru
                            </Link>
                            <Link
                                sx={{
                                    color: (theme) => theme.palette.colors.white,
                                    '&:hover': { color: (theme) => theme.palette.colors.mediumGray }
                                }}
                                href="mailto:Stanko-abraziv@list.ru"
                            >
                                Stanko-abraziv@list.ru
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Typography variant="H6" color="colors.white">Спасибо за то, что выбрали нас!</Typography>
        </Stack>
    )
}