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
          color: "white",
          borderColor: "white",
        },
        "&.MuiButton-outlined:hover": {
          backgroundColor: theme.palette.primary.light,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
