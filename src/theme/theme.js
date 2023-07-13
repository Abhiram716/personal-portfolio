import { createTheme } from "@mui/material/styles";
import Components from "./overrides";
import Typography from "./typography";
import breakpoints from "./breakpoints";

const theme = createTheme({
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

