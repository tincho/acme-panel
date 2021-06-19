import { ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "./theme";

import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
