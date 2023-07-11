import { createTheme } from "@mui/material/styles";
import Components from "./overrides";
import Typography from "./typograpgy";

const theme = createTheme({
  components: {
    ...Components,
  },
  typography: {
    ...Typography,
    h6: {
      fontWeight: "900",
    },
  },
});

export default theme;

