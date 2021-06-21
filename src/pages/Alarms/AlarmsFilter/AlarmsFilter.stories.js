import React from "react";

import AlarmsFilter from "./AlarmsFilter";

export default {
  title: "organisms/AlarmsFilter",
  component: AlarmsFilter,
};

const Template = (props) => <AlarmsFilter {...props} />;

export const AlarmsTable = Template.bind({});
