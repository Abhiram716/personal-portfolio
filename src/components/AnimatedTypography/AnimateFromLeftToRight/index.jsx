import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Typography } from "@mui/material";

const AnimateLeftToRight = ({ children, ...TypographyProps }) => {
  const textAppearAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-100%)" },
    config: { duration: 800 }, // Adjust duration as needed
  });

  return (
    <animated.div style={textAppearAnimation}>
      <Typography {...TypographyProps}>{children}</Typography>
    </animated.div>
  );
};

export default AnimateLeftToRight;
