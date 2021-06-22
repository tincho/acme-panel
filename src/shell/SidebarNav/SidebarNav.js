import React from "react";
import PropTypes from "prop-types";

import { Link, useRouteMatch } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

export default function SidebarNav({ subheaderText, items }) {
  return (
    <List>
      <ListSubheader inset>{subheaderText}</ListSubheader>
      <>
        {items.map(({ path, text, icon, activeOnlyWhenExact }) => (
          <ListItemLink
            key={path}
            to={path}
            primary={text}
            icon={icon}
            activeOnlyWhenExact={!!activeOnlyWhenExact}
          />
        ))}
      </>
    </List>
  );
}

SidebarNav.propTypes = {
  subheaderText: PropTypes.string,
  items: PropTypes.array,
};

const useCustomLink = (to) =>
  React.useMemo(
    () =>
      // eslint-disable-next-line react/display-name
      React.forwardRef((linkProps, ref) => (
        <Link {...linkProps} to={to} ref={ref} />
      )),
    [to]
  );

function ListItemLink({ to, primary, icon, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  const CustomLink = useCustomLink(to);

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
