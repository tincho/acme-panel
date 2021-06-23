//import { render } from "@testing-library/react";
//import { useContext } from "react";
import { AlarmsContext, AlarmsProvider, useAlarms } from "./alarmsContext";

console.log(AlarmsProvider, useAlarms);

describe("Alarms Context", () => {
  describe("AlarmsContext", () => {
    it("is a context :)", () => {
      expect(AlarmsContext.Provider).toBeDefined();
      expect(AlarmsContext.Consumer).toBeDefined();
    });
  });

  describe("AlarmsProvider", () => {
    it("passes data", () => {});
    it("passes dispatchers", () => {});
    describe("useAlarms", () => {
      it("gets data - no selector", () => {});
      it("gets data - with selector", () => {});
      it("reducer: loadAlarms", () => {});
      it("reducer: deleteAlarm", () => {});
      it("reducer: pauseAlarm", () => {});
      it("reducer: resumeAlarm", () => {});
    });
  });
});
