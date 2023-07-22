import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins/300.css";
import "@fontsource/kurale";

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
