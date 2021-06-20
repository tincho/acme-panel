import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

export default function AlarmsFilter() {
  const handleChangeStatus = () => {};
  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item>
          <TextField id="search-alarm-name" label="Filled" variant="filled" />
        </Grid>
        <Grid item>
          <FormControl variant="filled">
            <InputLabel id="search-alarm-status-label">Paused</InputLabel>
            <Select
              labelId="search-alarm-status-label"
              id="search-alarm-status"
              value=""
              onChange={handleChangeStatus}
            >
              <MenuItem value="">
                <em>Any</em>
              </MenuItem>
              <MenuItem value={"true"}>True</MenuItem>
              <MenuItem value={"false"}>False</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button>Search</Button>
        </Grid>
      </Grid>
    </form>
  );
}
