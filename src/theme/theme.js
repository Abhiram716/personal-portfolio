import { createTheme } from "@mui/material/styles";

import Typography from "./typograpgy";

import palette from "./palette";

const theme = createTheme({
  palette: {
    ...palette,
  },
  typography: {
    ...Typography,
  },
});

export default theme;
