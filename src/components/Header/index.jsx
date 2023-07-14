import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

import HeaderItem from "./HeaderItem";

const Header = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const headerItemProps = [
    {
      headerItemName: "HOME",
      headerItemState: "home",
    },
    {
      headerItemName: "WORK",
      headerItemState: "work",
      sx: { ml: 4 },
    },
    {
      headerItemName: "ABOUT",
      headerItemState: "about",
      sx: { ml: 4 },
    },
  ];

  const matchXs = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const theme = useTheme();

  return (
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
          {headerItemProps.map((item, index) => (
            <HeaderItem
              key={index}
              activeItem={activeItem}
              handleItemClick={handleItemClick}
              {...item}
            />
          ))}

          {!matchXs && <Box sx={{ mr: 14 }}></Box>}
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
