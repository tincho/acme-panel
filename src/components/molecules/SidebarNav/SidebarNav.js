import React from "react";
import PropTypes from "prop-types";

import { Link, useRouteMatch } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";

export default function SidebarNav() {
  return (
    <List>
      <ListSubheader inset>Settings</ListSubheader>
      <ListItemLink
        to="/"
        primary="Dashboard"
        icon={<DashboardIcon />}
        activeOnlyWhenExact={true}
      />
      <ListItemLink to="/alerts" primary="Alerts" icon={<AssignmentIcon />} />
    </List>
  );
}

function ListItemLink({ to, primary, icon, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  const CustomLink = React.useMemo(
    () =>
      // eslint-disable-next-line react/display-name
      React.forwardRef((linkProps, ref) => (
        <Link {...linkProps} to={to} ref={ref} />
      )),
    [to]
  );
  return (
    <ListItem button component={CustomLink} selected={!!match}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
}
ListItemLink.propTypes = {
  ...Link.propTypes,
  activeOnlyWhenExact: PropTypes.bool,
};
