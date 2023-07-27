import { Box, Container, Grid } from "@mui/material";
import Lottie from "lottie-react";
import React, { useRef } from "react";

import skillsAnimation from "../../assets/skillsAnimation.json";
import welcomeAnimation from "../../assets/welcome.json";
import AnimateFromLeftToRight from "../AnimatedTypography/AnimateFromLeftToRight";
import FadeInTypography from "../AnimatedTypography/FadeInTypography";

const HomePage = () => {
  const welcomeAnimationRef = useRef(null);

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
            <Lottie
              lottieRef={welcomeAnimationRef}
              animationData={welcomeAnimation}
              style={{ width: "100%" }}
              initialSegment={[45, 90]}
              onLoadedImages={() => {
                welcomeAnimationRef.current?.setSpeed(0.5);
              }}
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
          <Lottie animationData={skillsAnimation} style={{ width: "100%" }} />
        </Box>
      </Grid>
    </Container>
  );
};

export default HomePage;
