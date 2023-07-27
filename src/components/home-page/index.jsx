import { Box, Container, Grid } from "@mui/material";
import React, { useRef } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

import AnimateFromLeftToRight from "../AnimatedTypography/AnimateFromLeftToRight";
import FadeInTypography from "../AnimatedTypography/FadeInTypography";

const HomePage = () => {
  const welcomeAnimationRef = useRef(null);
  const skillsAnimationRef = useRef(null);

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        display: "flex",

        flexDirection: { xs: "column", sm: "column", xl: "row" },
        justifyContent: { xs: "center", sm: "center", xl: "space-between" },
        alignItems: "center",
        color: "white",
        minHeight: "100vh",
        pt: { xs: 15, md: 10 },
        pl: { lg: 2 },
        pr: { lg: 2 },
      }}
    >
      <Grid
        container
        item
        lg={4}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Grid item>
          <Box
            sx={{
              width: { xs: "100px", sm: "100px", md: "150px" },
            }}
          >
            <DotLottiePlayer
              src="https://lottie.host/4611e951-8866-4052-83c0-775f269fe0f5/e6CHz9jmYO.json"
              style={{ width: "100%" }}
              autoplay
              loop
              speed={1}
              lottieRef={welcomeAnimationRef}
            />
          </Box>
        </Grid>
        <Grid item>
          <FadeInTypography
            duration={"1000"}
            fromOpacity={"0"}
            toOpacity={"1"}
            variant={"h2"}
            color={"white"}
          >
            Hello, I am Abhiram.
          </FadeInTypography>
        </Grid>
        <Grid item>
          <AnimateFromLeftToRight
            variant={"h4"}
            color={"white"}
            sx={{ maxWidth: "400px", mt: 2 }}
          >
            Building websites one line of code at a time
          </AnimateFromLeftToRight>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={7}>
        <Box sx={{ width: { xs: "350px", sm: "500px", md: "800px" } }}>
          <DotLottiePlayer
            src="https://lottie.host/401fbdab-b242-4fbf-9ead-64dc86c69722/413TWt6laW.lottie"
            autoplay
            loop
            speed={1.5}
            lottieRef={skillsAnimationRef}
            style={{ width: "100%" }}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default HomePage;
