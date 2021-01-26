//React
import React from "react";
//MUI
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
//Component
import GameContainer from "./components/game/container";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <GameContainer/>
      </Container>
    </React.Fragment>
  );
}

export default App;
