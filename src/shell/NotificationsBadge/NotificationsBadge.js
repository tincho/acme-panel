import React from "react";
import PropTypes from "prop-types";

import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

export default function NotificationsBadge({ count, ...props }) {
  const { min = 0, max = 99 } = props;

  const safeCount = Math.max(min, ~~count); // fallback to 0 if below min
  let content = safeCount > max ? `${max}+` : safeCount;
  return (
    <IconButton color="inherit" title={safeCount}>
      <Badge badgeContent={content} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}
NotificationsBadge.propTypes = {
  count: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};
