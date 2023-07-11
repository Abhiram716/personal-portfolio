import { AppBar, Toolbar, Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const Header = () => {
  const matchXs = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            background:
              "linear-gradient(180deg, #010208 16.39%, #010206 20.51%, #040008 24.79%, #010101 30.46%, #010101 34.11%, #010101 36.21%, #010101 100%)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <Box sx={{ display:  "none" }}>
            <Typography variant="h4">Abhiram Kantipudi</Typography>
          </Box> */}
          <Toolbar>
            <Typography variant="h6">HOME</Typography>
            <Typography variant="h6" sx={{ ml: 4 }}>
              WORK
            </Typography>
            <Typography variant="h6" sx={{ ml: 4 }}>
              ABOUT
            </Typography>
            {!matchXs && <Box sx={{ mr: 14 }}></Box>}
          </Toolbar>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
