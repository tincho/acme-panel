import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "space-between",
    height: 240,
  },
  btn: {
    textAlign: "center",
  },
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Typography component="h4" variant="h4">
          ¯\_(ツ)_/¯
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="outlined"
          className={classes.btn}
          size="large"
        >
          Go home
        </Button>
      </Paper>
    </Grid>
  );
}
