import { useReducer } from "react"
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

  const dispatchers = {
    deleteAlarm: (id) => dispatch({ type: "delete", payload: id }),
    pauseAlarm: (id) => dispatch({ type: "pause", payload: id }),
    resumeAlarm: (id) => dispatch({ type: "resume", payload: id }),
  }

  return (
    <>
      <Grid item xs={12}>
        <AlarmsFilter alarms={alarms} />
      </Grid>
      <Grid item xs={12}>
        <AlarmsList alarms={alarms} {...dispatchers} />
      </Grid>
      <Grid item>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
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
