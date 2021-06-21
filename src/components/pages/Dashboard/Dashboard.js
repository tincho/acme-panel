import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useAlarms } from "../../../alarmsContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function DashboardPage() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const alarms = useAlarms("data");
  const total = alarms.length;
  const active = alarms.filter(({ paused }) => paused !== "true").length;

  return (
    <>
      <Grid item xs={12} md={6}>
        <Paper className={fixedHeightPaper}>
          <Typography component="h4" variant="h4">
            {active} / {total} active alarms
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={fixedHeightPaper}>
          <Typography component="h4" variant="h4">
            To Be Implemented
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
