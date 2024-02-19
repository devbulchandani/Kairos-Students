import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
    const theme = useTheme();
    const nonMobileScreen = useMediaQuery("(min-width: 924px)");

    return (
        <Box>
            <Box width="100%" bgcolor={theme.palette.background.alt}
                p="1rem 6%" textAlign="center"
            >
                <Typography
                    fontWeight="bold"
                    fontSize="32px"
                    color="primary"
                >
                    Kairos
                </Typography>
            </Box>

            <Box
                width={nonMobileScreen ? "50%" : "93%"}
                p="2rem"
                m="2rem"
                border="1.5rem"
                bgcolor={theme.palette.background.alt}
            >
                <Typography
                    fontWeight="500" variant="h5" sx={{
                        mb : "1.5rem", 
                    }}
                >
                    Welcome to Kaioros
                    <Form />

                </Typography>
            </Box>

        </Box>
    )
}

export default LoginPage;