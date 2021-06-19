import Grid from "@material-ui/core/Grid";
import AlarmsList from "../../organisms/AlarmsList";

export default function AlarmsPage() {
  return (
    <Grid item xs={12}>
      <AlarmsList />
    </Grid>
  );
}
