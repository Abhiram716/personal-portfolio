import { createTheme } from "@mui/material/styles";

import breakpoints from "./breakpoints";
import Components from "./overrides";
import Typography from "./typograpgy";
import palette from "./palette";

const theme = createTheme({
  palette: {
    ...palette
  },
  components: {
    ...Components,
  },
  typography: {
    ...Typography
  },
  breakpoints: {
    ...breakpoints
  }
});

export default theme;

