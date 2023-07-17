import { createTheme } from "@mui/material/styles";

import Components from "./overrides";
import Typography from "./typograpgy";
import palette from "./palette";
import breakpoints from "./breakpoints";

const theme = createTheme({
  palette: {
    ...palette
  },
  components: {
    ...Components,
  },
  typography: {
    ...Typography,
 
  },
  breakpoints: {
    ...breakpoints,
  }
});

export default theme;

