import { createTheme } from "@mui/material/styles";
import Components from "./overrides";

const theme = createTheme({
  components: {
    ...Components
  },
});

export default theme;

