import { BoxProps, Container, Stack, StackProps } from "@mui/material";
import { FC } from "react";
import { Header } from "./organisms/Header";
import { Footer } from "./organisms/Footer";

export const Layout: FC<StackProps> = ({ children, sx, ...props }) => {
    return <Stack
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
}