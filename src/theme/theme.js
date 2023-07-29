import { createTheme } from "@mui/material/styles";

import Components from "./overrides";
import Typography from "./typograpgy";

import palette from "./palette";

const theme = createTheme({
  palette: {
    ...palette,
  },
  components: {
    ...Components,
  },
  typography: {
    ...Typography,
  },
});

export default theme;
