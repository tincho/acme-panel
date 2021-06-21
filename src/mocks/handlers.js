import { rest } from "msw";

import alarms from "./alarms.json";

const randomAlarms = alarms.filter(() => parseInt(Math.random() * 2));

export const handlers = [
  rest.get("/api/alarms", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(randomAlarms));
  }),
];
