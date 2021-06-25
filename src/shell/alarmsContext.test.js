/* eslint-disable no-unused-vars */
import { cleanup, render, fireEvent } from "@testing-library/react";
import { AlarmsProvider, useAlarms } from "./alarmsContext";

describe("Alarms Context", () => {
  describe("AlarmsProvider", () => {
    it("renders children", () => {
      const Comp = jest.fn(() => null);
      render(
        <AlarmsProvider>
          <Comp />
        </AlarmsProvider>
      );
      expect(Comp).toHaveBeenCalled();
    });
    describe("useAlarms", () => {
      it("gets data - no selector", () => {
        const spy = jest.fn();
        const Comp = () => {
          const { data: alarms } = useAlarms();
          spy(alarms);
          return null;
        };
        render(
          <AlarmsProvider>
            <Comp />
          </AlarmsProvider>
        );
        expect(spy).toHaveBeenCalledWith([]);
      });
      it("gets data - with selector", () => {
        const spy = jest.fn();
        const Comp = () => {
          const alarms = useAlarms("data");
          spy(alarms);
          return null;
        };
        render(
          <AlarmsProvider>
            <Comp />
          </AlarmsProvider>
        );
        expect(spy).toHaveBeenCalledWith([]);
      });

      describe("reducers", () => {
        const Comp = () => {
          const {
            data: alarms,
            loadAlarms,
            deleteAlarm,
            pauseAlarm,
            resumeAlarm,
          } = useAlarms();
          const fakeLoad = () =>
            loadAlarms([
              { id: "1", name: "a", paused: "true" },
              { id: "2", name: "b", paused: "true" },
              { id: "3", name: "c", paused: "false" },
            ]);
          return (
            <div>
              <p data-testid="count">{alarms.length}</p>
              {alarms.map(({ id, name, paused }) => (
                <div key={id}>
                  <p>{`${name}: ${paused}`}</p>
                  <button onClick={() => pauseAlarm(id)}>pause {name}</button>
                  <button onClick={() => resumeAlarm(id)}>resume {name}</button>
                  <button onClick={() => deleteAlarm(id)}>delete {name}</button>
                </div>
              ))}
              <button onClick={fakeLoad}>load</button>
            </div>
          );
        };
        afterEach(cleanup);
        it("reducer: loadAlarms", () => {
          const { getByText, getByTestId } = render(
            <AlarmsProvider>
              <Comp />
            </AlarmsProvider>
          );
          fireEvent.click(getByText("load"));
          expect(getByText("a: true")).toBeInTheDocument();
          expect(getByTestId("count").textContent).toBe("3");
        });
        it("reducer: deleteAlarm", () => {
          const { getByText, getByTestId } = render(
            <AlarmsProvider>
              <Comp />
            </AlarmsProvider>
          );
          fireEvent.click(getByText("load"));
          const a = getByText("a: true");
          expect(a).toBeInTheDocument();
          fireEvent.click(getByText("delete a"));
          expect(getByTestId("count").textContent).toBe("2");
          expect(a).not.toBeInTheDocument();
        });
        it("reducer: pauseAlarm", () => {
          const { getByText, getByTestId } = render(
            <AlarmsProvider>
              <Comp />
            </AlarmsProvider>
          );
          fireEvent.click(getByText("load"));
          const c = getByText("c: false");
          expect(c).toBeInTheDocument();

          fireEvent.click(getByText("pause c"));

          expect(getByTestId("count").textContent).toBe("3");
          expect(c.textContent).toBe("c: true");
        });
        it("reducer: resumeAlarm", () => {
          const { getByText, getByTestId } = render(
            <AlarmsProvider>
              <Comp />
            </AlarmsProvider>
          );
          fireEvent.click(getByText("load"));
          const a = getByText("a: true");
          expect(a).toBeInTheDocument();

          fireEvent.click(getByText("resume a"));

          expect(getByTestId("count").textContent).toBe("3");
          expect(a.textContent).toBe("a: false");
        });
      });
    });
  });
});
