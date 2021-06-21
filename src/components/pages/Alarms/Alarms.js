import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AlarmsList from "../../organisms/AlarmsList";
import AlarmsFilter from "../../organisms/AlarmsFilter";
import { useAlarms } from "../../../alarmsContext";

export default function AlarmsPage() {
  const { data: alarms, ...dispatchers } = useAlarms();

  const [filters, setFilters] = useState({
    name: "",
    paused: "",
  });

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
