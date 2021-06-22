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
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PauseIcon from "@material-ui/icons/Pause";
import PlayIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  actionsCol: {
    borderLeft: `1px solid ${theme.palette.primary.light}`,
    width: "20%",
    textAlign: "center",
    "& button": {
      padding: theme.spacing(1),
    },
  },
}));

export default function AlarmsList({
  alarms,
  deleteAlarm: onClickDelete,
  pauseAlarm: onClickPause,
  resumeAlarm: onClickResume,
}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="alarms list" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Metric&#39;s source</TableCell>
            <TableCell>Metric</TableCell>
            <TableCell>Trigger</TableCell>
            <TableCell>Paused</TableCell>
            <TableCell className={classes.actionsCol} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alarms.map((alarm) => (
            <AlarmRow
              key={alarm.id}
              {...alarm}
              pause={() => onClickPause(alarm.id)}
              resume={() => onClickResume(alarm.id)}
              deleteItem={() => onClickDelete(alarm.id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
AlarmsList.propTypes = {
  alarms: PropTypes.arrayOf(PropTypes.object),
  deleteAlarm: PropTypes.func,
  pauseAlarm: PropTypes.func,
  resumeAlarm: PropTypes.func,
};

const AlarmRow = React.memo(
  function AlarmRow({
    pause,
    resume,
    deleteItem,
    name,
    source,
    metric,
    trigger,
    paused,
  }) {
    const classes = useStyles();
    const actionBtns = { false: PauseBtn, true: ResumeBtn };
    const ActionButton = actionBtns[paused];

    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell>{source}</TableCell>
        <TableCell>{metric}</TableCell>
        <TableCell>{trigger.join(" ")}</TableCell>
        <TableCell>{capitalize(paused)}</TableCell>
        <TableCell className={classes.actionsCol} size="small">
          <ActionButton onClickPause={pause} onClickResume={resume} />
          <IconButton size="small" title="Edit" aria-label="edit" disabled>
            <EditIcon />
          </IconButton>
          <IconButton
            size="small"
            title="Delete"
            aria-label="delete"
            onClick={deleteItem}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  },
  (prevProps, nextProps) => {
    prevProps.id === nextProps.id;
  }
);
AlarmRow.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  source: PropTypes.string,
  metric: PropTypes.string,
  trigger: PropTypes.array,
  paused: PropTypes.string,

  pause: PropTypes.func,
  resume: PropTypes.func,
  deleteItem: PropTypes.func,
};

function PauseBtn({ onClickPause }) {
  return (
    <IconButton size="small" onClick={onClickPause}>
      <PauseIcon />
    </IconButton>
  );
}
PauseBtn.propTypes = {
  onClickPause: PropTypes.func,
};

function ResumeBtn({ onClickResume }) {
  return (
    <IconButton size="small" onClick={onClickResume}>
      <PlayIcon />
    </IconButton>
  );
}
ResumeBtn.propTypes = {
  onClickResume: PropTypes.func,
};

function capitalize(str) {
  const [first, ...rest] = [...String(str)];
  return `${first.toUpperCase() + rest.join("").toLowerCase()}`;
}
