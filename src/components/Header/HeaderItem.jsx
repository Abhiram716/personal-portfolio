import { Box, ButtonBase, Typography, useTheme } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

const HeaderItem = ({
  activeItem,
  headerItemName,
  handleItemClick,
  headerItemState,
  navigate,
  ...others
}) => {
  const theme = useTheme();

  return (
    <Link to={navigate}>
      <ButtonBase
        disableRipple
        sx={{ cursor: "pointer", ...others.sx }}
        onClick={() => handleItemClick(headerItemState)}
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
              activeItem === `${headerItemState}`
                ? theme.palette.info.main
                : theme.palette.primary.contrastText
            }
          >
            {headerItemName}
          </Typography>
          <Box
            sx={{
              display: activeItem === `${headerItemState}` ? "block" : "none",
              height: "3px",
              width: "10px",
              bgcolor: theme.palette.primary.contrastText,
            }}
          />
        </Box>
      </ButtonBase>
    </Link>
  );
};

export default HeaderItem;
