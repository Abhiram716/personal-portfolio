import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import { AiOutlineCopyrightCircle, AiFillHeart } from "react-icons/ai";

import SecondaryContainer from "../Container/SecondaryContainer";

const Footer = () => {
  const theme = useTheme();
  return (
    <SecondaryContainer sx={{ p: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            color={theme.palette.primary.contrastText}
            variant="subtitle2"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AiOutlineCopyrightCircle />
            &nbsp;
            {`${new Date().getFullYear()} `}
            &nbsp; coded with &nbsp;
            <AiFillHeart /> &nbsp; by Abhiram Kantipudi
          </Typography>
        </Grid>
      </Grid>
    </SecondaryContainer>
  );
};

export default Footer;
