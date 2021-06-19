import React from "react";

import NotificationsBadge from "./NotificationsBadge";

export default {
  title: "atoms/NotificationsBadge",
  component: NotificationsBadge,
};

const Template = (props) => <NotificationsBadge {...props} />;
Template.argTypes = {
  onClick: { action: "clicked" },
};

export const Empty = Template.bind({});
Empty.title = "Is Empty";

export const Some = Template.bind({});
Some.title = "Has Some";
Some.args = {
  count: 2,
};
