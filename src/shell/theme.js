import { createMuiTheme } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import pink from "@material-ui/core/colors/pink";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: amber,
    secondary: pink,
  },
});

export default darkTheme;
