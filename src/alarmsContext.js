import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import generateRandomAlarms from "./generateRandomAlarms";
const randomAlarms = generateRandomAlarms({
  min: 7,
  max: 121,
});

const value = {
  data: [],
  deleteAlarm: () => {},
  pauseAlarm: () => {},
  resumeAlarm: () => {},
};

const AlarmsContext = createContext(value);

export function AlarmsProvider({ children }) {
  const [data, dispatch] = useReducer(alarmsReducer, randomAlarms);

  const dispatchers = {
    deleteAlarm: (id) => dispatch({ type: "delete", payload: id }),
    pauseAlarm: (id) => dispatch({ type: "pause", payload: id }),
    resumeAlarm: (id) => dispatch({ type: "resume", payload: id }),
  };

  const contextValue = {
    data,
    ...dispatchers,
  };

  return (
    <AlarmsContext.Provider value={contextValue}>
      {children}
    </AlarmsContext.Provider>
  );
}
AlarmsProvider.propTypes = {
  children: PropTypes.element,
};

function alarmsReducer(prevState, { type, payload }) {
  const identity = (a) => a;
  const actions = {
    delete: (state) => state.filter(({ id }) => id !== payload),
    pause: (state) =>
      state.map(({ paused, ...item }) => ({
        ...item,
        paused: item.id === payload ? "true" : paused,
      })),
    resume: (state) =>
      state.map(({ paused, ...item }) => ({
        ...item,
        paused: item.id === payload ? "false" : paused,
      })),
  };

  const reducer = actions[type] || identity;
  const newState = reducer(prevState);
  return newState;
}

export const useAlarms = (selector) => {
  const ctx = useContext(AlarmsContext);
  if (selector) {
    return ctx[selector];
  }
  return ctx;
};

export default { AlarmsContext, AlarmsProvider, useAlarms };
