import React from "react";
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

export default function Alerts() {
  const classes = useStyles();

  const capitalize = str => {
    const [first, ...rest] = [...String(str)];
    return `${first.toUpperCase()+rest.join('').toLowerCase()}`
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="alerts list">
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.source}</TableCell>
              <TableCell>{row.metric}</TableCell>
              <TableCell>
                {row.trigger}
              </TableCell>
              <TableCell>{capitalize(row.paused)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
