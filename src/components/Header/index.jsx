import { AppBar, Grid, Toolbar } from "@mui/material";
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

  return (
    <AppBar>
      <Toolbar
        sx={{
          background:
            "linear-gradient(180deg, #010208 16.39%, #010206 20.51%, #040008 24.79%, #010101 30.46%, #010101 34.11%, #010101 36.21%, #010101 100%)",
          pt: 3,
          pb: 3,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ lg: 20, md: 15, sm: 15, xs: 4 }}
        >
          {headerItemProps.map((item, index) => (
            <Grid item>
              <HeaderItem
                key={index}
                activeItem={activeItem}
                handleItemClick={handleItemClick}
                {...item}
              />
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
