import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3),
  },
  statusFilter: {
    width: "25ch",
  },
  btns: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const emptyFilters = {
  name: "",
  paused: "",
};

export default function AlarmsFilter({ applyFilters }) {
  const classes = useStyles();
  const [filters, setFilters] = React.useState(emptyFilters);

  const onChangeName = (evt) => {
    setFilters({
      ...filters,
      name: evt.target.value,
    });
  };
  const onChangePaused = (evt) => {
    setFilters({
      ...filters,
      paused: evt.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    applyFilters(filters);
  };

  const clearFilters = () => {
    setFilters(emptyFilters);
    applyFilters(emptyFilters);
  };

  return (
    <Paper
      component="form"
      noValidate
      autoComplete="off"
      className={classes.root}
      action=""
      onSubmit={onSubmit}
    >
      <TextField
        id="search-alarm-name"
        label="Name"
        value={filters.name}
        onChange={onChangeName}
      />
      <FormControl className={classes.statusFilter}>
        <InputLabel id="search-alarm-status-label">Status</InputLabel>
        <Select
          labelId="search-alarm-status-label"
          id="search-alarm-status"
          value={filters.paused}
          onChange={onChangePaused}
        >
          <MenuItem value="" selected={filters.paused === ""}>
            <em>Any</em>
          </MenuItem>
          <MenuItem value={"true"} selected={filters.paused === "true"}>
            True
          </MenuItem>
          <MenuItem value={"false"} selected={filters.paused === "false"}>
            False
          </MenuItem>
        </Select>
      </FormControl>
      <div className={classes.btns}>
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
        <IconButton variant="outlined" onClick={clearFilters} type="button">
          <ClearIcon />
        </IconButton>
      </div>
    </Paper>
  );
}

AlarmsFilter.propTypes = {
  applyFilters: PropTypes.function,
};
