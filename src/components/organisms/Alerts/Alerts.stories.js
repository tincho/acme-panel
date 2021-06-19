import React from "react";

import Alerts from "./Alerts";

export default {
  title: "organisms/Alerts",
  component: Alerts,
};

const Template = (props) => <Alerts {...props} />;

export const AlertsTable = Template.bind({});
