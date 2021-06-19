import React from "react";
import PropTypes from 'prop-types';

import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

export default function NotificationsBadge({ count, onClick, ...props }) {
  const {
    min = 0,
    max = 99
  } = props

  const safeCount = Math.max(min, ~~count) // fallback to 0 if below min
  let content = (safeCount > max) ? `${max}+` : safeCount
  return (
    <IconButton color="inherit" onClick={onClick} title={safeCount}>
      <Badge badgeContent={content} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}
NotificationsBadge.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.function,
  min: PropTypes.number,
  max: PropTypes.number
}