import { ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "./theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppShell from "./AppShell";

import Dashboard from "./components/pages/Dashboard";
import Alerts from "./components/pages/Alerts";

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
              <Route path="/alerts">
                <Alerts />
              </Route>
            </Switch>
          </AppShell>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
