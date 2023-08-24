import React from "react";
import { Button, useTheme } from "@mui/material";

const PrimaryButton = ({ endIcon, children, ...others }) => {
  const theme = useTheme();
  return (
    <Button
      variant={"outlined"}
      endIcon={endIcon}
      {...others}
      sx={{
        borderRadius: 12,
        "&.MuiButton-outlined": {
          color: theme.palette.primary.contrastText,
          borderColor: theme.palette.primary.contrastText,
        },
        "&.MuiButton-outlined:hover": {
          backgroundColor: theme.palette.secondary.main,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
