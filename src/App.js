import { ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "./theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppShell from "./AppShell";

import Dashboard from "./components/pages/Dashboard";
import Alarms from "./components/pages/Alarms";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <AppShell>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/alarms">
                <Alarms />
              </Route>
            </Switch>
          </AppShell>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
