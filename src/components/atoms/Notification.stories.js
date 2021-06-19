import React from "react";

import Notification from "./Notification";

export default {
  title: "atoms/Notification",
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Notification",
};
/*
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Notification',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
 */
