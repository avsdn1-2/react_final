import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export const theme = createMuiTheme({
  spacing: 10,
  palette: {
    primary: {
      main: purple[900],
    },
  },
});
