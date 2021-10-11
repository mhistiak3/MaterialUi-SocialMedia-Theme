import { ThemeProvider } from "@emotion/react";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
