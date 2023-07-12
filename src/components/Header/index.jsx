import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  ButtonBase,
  ButtonGroup,
} from "@mui/material";
import React, { useState } from "react";

const Header = () => {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const matchXs = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const theme = useTheme();

  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            background:
              "linear-gradient(180deg, #010208 16.39%, #010206 20.51%, #040008 24.79%, #010101 30.46%, #010101 34.11%, #010101 36.21%, #010101 100%)",
            display: "flex",
            justifyContent: matchXs ? "center" : "space-between",
          }}
        >
          {!matchXs && (
            <Typography
              variant="h4"
              sx={{ ml: 14, mb: 3, mt: 3 }}
              color={theme.palette.primary.main}
            >
              Abhiram Kantipudi
            </Typography>
          )}
          <Toolbar sx={{ mb: 3, mt: 3 }}>
            <ButtonGroup>
              <ButtonBase
                disableRipple
                onClick={() => handleItemClick("home")}
                sx={{ cursor: "pointer" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    color={
                      activeItem === "home"
                        ? theme.palette.primary.main
                        : "white"
                    }
                  >
                    HOME
                  </Typography>
                  <Box
                    sx={{
                      display: activeItem === "home" ? "block" : "none",
                      height: "3px",
                      width: "10px",
                      bgcolor: "white",
                    }}
                  />
                </Box>
              </ButtonBase>
              <ButtonBase
                sx={{ ml: 4, cursor: "pointer" }}
                disableRipple
                onClick={() => handleItemClick("work")}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    color={
                      activeItem === "work"
                        ? theme.palette.primary.main
                        : "white"
                    }
                  >
                    WORK
                  </Typography>
                  <Box
                    sx={{
                      display: activeItem === "work" ? "block" : "none",
                      height: "3px",
                      width: "10px",
                      bgcolor: "white",
                    }}
                  />
                </Box>
              </ButtonBase>
              <ButtonBase
                sx={{
                  ml: 4,
                  cursor: "pointer",
                }}
                disableRipple
                onClick={() => handleItemClick("about")}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    color={
                      activeItem === "about"
                        ? theme.palette.primary.main
                        : "white"
                    }
                  >
                    ABOUT
                  </Typography>
                  <Box
                    sx={{
                      display: activeItem === "about" ? "block" : "none",
                      height: "3px",
                      width: "10px",
                      bgcolor: "white",
                    }}
                  />
                </Box>
              </ButtonBase>
            </ButtonGroup>
            {!matchXs && <Box sx={{ mr: 14 }}></Box>}
          </Toolbar>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
