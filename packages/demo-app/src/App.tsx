import React from "react";
import { ThemeProvider } from "styled-components";
import CodefiButton from "@rimble/codefi-button";
// import CodefiTheme from "@rimble/codefi-themes";

const theme = {
  colors: {
    primary: "blue",
    text: "white"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CodefiButton>I am @rimble/codefi-button</CodefiButton>
    </ThemeProvider>
  );
}

export default App;
