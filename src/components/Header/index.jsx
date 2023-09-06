import { AppBar, Box, Toolbar, Typography, useTheme } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

import HeaderItem from "./HeaderItem";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      color="transparent"
      sx={{ backdropFilter: "blur(20px)", height: "40px" }}
    >
      <Toolbar
        disableGutters={true}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          height: "40px",
          pb: 2,
          boxSizing: "border-box",
        }}
      >
        <Link to="#home" style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            fontFamily={"'kurale',sans-serif"}
            color={theme.palette.info.main}
            sx={{
              display: { xs: "none", sm: "block" },
              mr: "auto",
              ml: 10,
            }}
          >
            {"<ak/>"}
          </Typography>
        </Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: { xs: 0, sm: 10 },
          }}
        >
          <HeaderItem />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
