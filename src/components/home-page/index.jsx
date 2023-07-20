import { Box, Container } from "@mui/material";
import Lottie from "lottie-react";
import React, { useRef } from "react";

import skillsAnimation from "../../assets/skillsAnimation.json";
import welcomeAnimation from "../../assets/welcome.json";
import FadeInTypography from "../AnimatedTypography/FadeInTypography";
import AnimateFromLeftToRight from "../AnimatedTypography/AnimateFromLeftToRight";

const HomePage = () => {
  const welcomeAnimationRef = useRef(null);

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        color: "white",
        pt: 30,
        pl: 15,
        pr: 10,
        pb: 30,
      }}
    >
      <Box>
        <Lottie
          lottieRef={welcomeAnimationRef}
          animationData={welcomeAnimation}
          style={{ width: "150px" }}
          initialSegment={[45, 90]}
          onLoadedImages={() => {
            welcomeAnimationRef.current?.setSpeed(0.5);
          }}
        />
        <FadeInTypography
          duration={"1000"}
          fromOpacity={"0"}
          toOpacity={"1"}
          variant={"h2"}
          color={"white"}
        >
          Hello, I am Abhiram.
        </FadeInTypography>
        <AnimateFromLeftToRight variant={"h4"} color={"white"}>
          Building websites one line of code at a time
        </AnimateFromLeftToRight>
      </Box>
      <Lottie animationData={skillsAnimation} style={{ width: "600px" }} />
    </Container>
  );
};

export default HomePage;
