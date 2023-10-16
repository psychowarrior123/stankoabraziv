import { BoxProps, Container, Stack, StackProps } from "@mui/material";
import { FC } from "react";
import { Header } from "./organisms/Header";
import { Footer } from "./organisms/Footer";
import { Title } from "react-head";

type Feature = 'main' | 'diamond' | 'cbn' | 'cup' | 'disc' | 'straight'

const translate = {
    main: '',
    diamond: 'Алмазный инструмент',
    cbn: "Круги эльборовые",
    cup: "Круги чашечные",
    disc: "Круги тарельчатые",
    straight: "Круги прямого профиля"
}

export const Layout: FC<{ currentFeature: Feature } & StackProps> = ({ currentFeature, children, sx, ...props }) => {
    return <>
        <Title>{`${!!translate[currentFeature] ? `${translate[currentFeature]} | ` : ''}Станкоабразив`}</Title>
        <Stack
            sx={{
                bgcolor: (theme) => theme.palette.colors.gray,
                width: '100%',
                minHeight: '100vh'
            }}
        >
            <Header />
            <Container
                maxWidth="xl"
                disableGutters
                sx={{
                    px: 8,
                    py: 4,
                    flexGrow: 1
                }}
            >
                {children}
            </Container>
            <Footer />
        </Stack>
    </>
}