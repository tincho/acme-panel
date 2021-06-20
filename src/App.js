import { ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "./theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppShell from "./AppShell";

import Dashboard from "./components/pages/Dashboard";
import Alarms from "./components/pages/Alarms";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <AppShell>
            <Switch>
              <Route path="/" component={Dashboard} exact />
              <Route path="/alarms" component={Alarms} />
              <Route component={NotFound} />
            </Switch>
          </AppShell>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
