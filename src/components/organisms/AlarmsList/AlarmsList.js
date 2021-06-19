import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function AlarmsList({ alarms }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="alarms list">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Metric&#39;s source</TableCell>
            <TableCell>Metric</TableCell>
            <TableCell>Trigger condition</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alarms.map((alarm) => (
            <TableRow key={alarm.name}>
              <TableCell component="th" scope="row">
                {alarm.name}
              </TableCell>
              <TableCell>{alarm.source}</TableCell>
              <TableCell>{alarm.metric}</TableCell>
              <TableCell>
                {alarm.trigger}
              </TableCell>
              <TableCell>{capitalize(alarm.paused)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
AlarmsList.propTypes = {
  alarms: PropTypes.arrayOf(PropTypes.object)
}

function capitalize(str) {
  const [first, ...rest] = [...String(str)];
  return `${first.toUpperCase()+rest.join('').toLowerCase()}`
}

function createData(name, source, metric, trigger, paused) {
  return { name, source, metric, trigger, paused };
}

const rows = [
  createData(
    "Kryptonite Levels in Technosfere",
    "Atlantic Server",
    "kryptokens",
    "> 9000",
    false
  ),
];

// eslint-disable-next-line react/display-name
export default function() {
  return <AlarmsList alarms={rows} />
}

