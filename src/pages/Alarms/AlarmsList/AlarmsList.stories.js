import React from "react";

import AlarmsList from "./AlarmsList";

export default {
  title: "organisms/AlarmsList",
  component: AlarmsList,
};

const Template = (props) => <AlarmsList {...props} />;

export const AlarmsTable = Template.bind({});
