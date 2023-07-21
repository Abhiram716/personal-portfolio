import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Lottie from "lottie-react";
import React, { useRef } from "react";

import skillsAnimation from "../../assets/skillsAnimation.json";
import welcomeAnimation from "../../assets/welcome.json";
import AnimateFromLeftToRight from "../AnimatedTypography/AnimateFromLeftToRight";
import FadeInTypography from "../AnimatedTypography/FadeInTypography";

const HomePage = () => {
  const welcomeAnimationRef = useRef(null);
  const theme = useTheme();
  const matchLg = useMediaQuery(theme.breakpoints.down("xl"));
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        display: "flex",
        flexDirection: matchLg ? "column" : "row",
        justifyContent: matchLg ? "center" : "space-between",
        alignItems: "center",
        height: "100vh",
        color: "white",
        overflow: matchMd ? "auto" : "hidden",
        pt: { xs: 15, md: 10 },
        pl: { md: 15 },
        pr: { md: 10 },
        pb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ width: { xs: "100px" } }}>
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
        <FadeInTypography
          duration={"1000"}
          fromOpacity={"0"}
          toOpacity={"1"}
          variant={"h2"}
          color={"white"}
        >
          Hello, I am Abhiram.
        </FadeInTypography>
        <AnimateFromLeftToRight
          variant={"h4"}
          color={"white"}
          sx={{ maxWidth: "400px", mt: 2 }}
        >
          Building websites one line of code at a time
        </AnimateFromLeftToRight>
      </Box>
      <Box sx={{ width: { xs: "390px", sm: "500px", md: "700px" } }}>
        <Lottie animationData={skillsAnimation} style={{ width: "100%" }} />
      </Box>
    </Container>
  );
};

export default HomePage;
