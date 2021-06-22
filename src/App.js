import { lazy, Suspense } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AlarmsProvider } from "./shell/alarmsContext";

import defaultTheme from "./shell/theme";
import Layout from "./shell/Layout";

import NotFound from "./pages/NotFound";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Alarms = lazy(() => import("./pages/Alarms"));

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <AlarmsProvider>
            <Layout>
              <Suspense fallback={<Loading />}>
                <Content />
              </Suspense>
            </Layout>
          </AlarmsProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

function Content() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/alarms" component={Alarms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function Loading() {
  return (
    <div
      style={{
        height: "60vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}

export default App;
