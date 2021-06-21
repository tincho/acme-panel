import { useReducer, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AlarmsList from "../../organisms/AlarmsList";
import AlarmsFilter from "../../organisms/AlarmsFilter";

// @TODO deprecate this!
import generateRandomAlarms from "../../../data/alarms.faker";
const randomAlarms = generateRandomAlarms();

export default function AlarmsPage() {
  const [alarms, dispatch] = useReducer(alarmsReducer, randomAlarms);
  const [filters, setFilters] = useState({
    name: "",
    paused: "",
  });

  const dispatchers = {
    deleteAlarm: (id) => dispatch({ type: "delete", payload: id }),
    pauseAlarm: (id) => dispatch({ type: "pause", payload: id }),
    resumeAlarm: (id) => dispatch({ type: "resume", payload: id }),
  };

  const showAlarms = alarms.filter(({ name, paused }) => {
    const matchName =
      filters.name === "" ? true : name.search(filters.name) !== -1;
    const matchStatus =
      filters.paused === "" ? true : paused === filters.paused;
    return matchName && matchStatus;
  });

  return (
    <>
      <Grid item xs={12}>
        <AlarmsFilter applyFilters={setFilters} />
      </Grid>
      <Grid item xs={12}>
        <AlarmsList alarms={showAlarms} {...dispatchers} />
      </Grid>
      <Grid container direction="row" justify="flex-end">
        <Grid item>
          <Fab color="primary" aria-label="add" disabled>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </>
  );
}

function alarmsReducer(prevState, { type, payload }) {
  const identity = (a) => a;
  const actions = {
    delete: (state) => state.filter(({ id }) => id !== payload),
    pause: (state) =>
      state.map(({ paused, ...item }) => ({
        ...item,
        paused: item.id === payload ? "true" : paused,
      })),
    resume: (state) =>
      state.map(({ paused, ...item }) => ({
        ...item,
        paused: item.id === payload ? "false" : paused,
      })),
  };

  const reducer = actions[type] || identity;
  const newState = reducer(prevState);
  return newState;
}
