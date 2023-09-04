import { Typography, useTheme } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

import "../../styles/header/activeStyleLink.css";

const HeaderItem = () => {
  const theme = useTheme();
  const headerItemProps = [
    {
      headerItemName: "HOME",
      headerItemState: "home",
      navigate: "#home",
      mr: 4,
    },
    {
      headerItemName: "WORK",
      headerItemState: "work",
      navigate: "#work",
      mr: 4,
    },
    {
      headerItemName: "ABOUT",
      headerItemState: "about",
      navigate: "#about",
      mr: 4,
    },
    {
      headerItemName: "CONTACT",
      headerItemState: "contact",
      navigate: "#contact",
    },
  ];

  return (
    <>
      {headerItemProps.map((item) => (
        <Link
          to={`/${item.navigate}`}
          key={item.headerItemName}
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            variant="body1"
            color={theme.palette.primary.contrastText}
            sx={{
              mr: item?.mr,
              "&:hover": {
                color: theme.palette.info.main,
              },
            }}
          >
            {item.headerItemName}
          </Typography>
        </Link>
      ))}
    </>
  );
};

export default HeaderItem;
