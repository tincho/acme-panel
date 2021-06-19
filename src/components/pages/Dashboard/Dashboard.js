import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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

  return (
    <>
      <Grid item xs={12} md={6}>
        <Paper className={fixedHeightPaper}>{"2 / 10 active alarms"}</Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={fixedHeightPaper}>{"To Be Implemented"}</Paper>
      </Grid>
    </>
  );
}
