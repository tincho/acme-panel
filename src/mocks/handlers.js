import { rest } from "msw";

import generateRandomAlarms from "./generateRandomAlarms";
const randomAlarms = generateRandomAlarms({
  min: 7,
  max: 121,
});

export const handlers = [
  rest.get("/api/alarms", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(randomAlarms));
  }),
];
