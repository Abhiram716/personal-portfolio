import { createTheme } from "@mui/material/styles";
import Components from "./overrides";
import Typography from "./typography";

const theme = createTheme({
  components: {
    ...Components,
  },
  typography: {
    ...Typography
  }
});

export default theme;

