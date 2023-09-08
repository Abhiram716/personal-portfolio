import React from "react";
import { Box, ThemeProvider, CssBaseline, Typography } from "@mui/material";
import { Link } from "gatsby";

import error from "../images/404.svg";
import SecondaryContainer from "../components/Container/SecondaryContainer";
import theme from "../theme/theme";
import Footer from "../components/Footer";
import Seo from "../components/Seo/seo";

const PageNotFound = () => {
  const { contrastText } = theme.palette.primary;
  const { main } = theme.palette.info;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SecondaryContainer
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            xl: "row",
          },
          justifyContent: { xs: "center", sm: "center", xl: "space-between" },
          alignItems: "center",
          color: theme.palette.primary.contrastText,
          minHeight: "100vh",
          overflow: "hidden",
          pt: { xs: 2, md: 10 },
          pl: { xs: 2, lg: 20 },
          pr: { xs: 2, lg: 20 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            mt: { xs: 5, sm: 5, md: 0 },
          }}
        >
          <Typography
            variant="h2"
            color={main}
            fontFamily={"'Poppins',sans-serif"}
          >
            Opps!...
          </Typography>
          <Typography variant="h4" color={main}>
            Page not found
          </Typography>
          <Typography color={contrastText} sx={{ mt: 1 }} variant="h6">
            The page you are looking for doesn’t exist.
          </Typography>
          <Link to="/" style={{ textDecorationColor: main }}>
            <Typography
              variant="h6"
              color={contrastText}
              sx={{
                "&:hover": {
                  color: main,
                },
              }}
            >
              Go back to Home
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            width: { xs: "350px", sm: "600px", md: "550px", xl: "900px" },
          }}
        >
          <img src={error} alt="404 Not Found" width="100%" height={"100%"} />
        </Box>
      </SecondaryContainer>
      <Footer />
    </ThemeProvider>
  );
};

export const Head = () => <Seo titleProp="404 Error" />;

export default PageNotFound;
