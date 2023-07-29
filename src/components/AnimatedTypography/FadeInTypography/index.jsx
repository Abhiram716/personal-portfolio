import { Typography } from "@mui/material";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

const FadeInTypography = ({
  children,
  fromOpacity,
  toOpacity,
  duration,
  ...TypograhyProps
}) => {
  const fadeInAnimation = useSpring({
    to: { opacity: toOpacity },
    from: { opacity: fromOpacity },
    config: { duration: duration },
  });
  return (
    <animated.div style={fadeInAnimation}>
      <Typography {...TypograhyProps}>{children}</Typography>
    </animated.div>
  );
};

export default FadeInTypography;
