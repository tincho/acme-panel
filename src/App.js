import { lazy, Suspense } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AlarmsProvider } from "./shell/alarmsContext";

import defaultTheme from "./shell/theme";
import Layout from "./shell/Layout";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Alarms = lazy(() => import("./pages/Alarms"));
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <AlarmsProvider>
            <Layout>
              <Suspense
                fallback={
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress />
                  </div>
                }
              >
                <Switch>
                  <Route path="/" component={Dashboard} exact />
                  <Route path="/alarms" component={Alarms} />
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
            </Layout>
          </AlarmsProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
