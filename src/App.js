import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AlarmsProvider } from "./shell/alarmsContext";

import defaultTheme from "./shell/theme";
import Layout from "./shell/Layout";

import Dashboard from "./pages/Dashboard";
import Alarms from "./pages/Alarms";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <AlarmsProvider>
            <Layout>
              <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/alarms" component={Alarms} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </AlarmsProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
