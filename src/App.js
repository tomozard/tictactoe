//React
import React, { useState } from "react";
//MUI
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
//Component
import Board from "./components/game/board";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Board/>
      </Container>
    </React.Fragment>
  );
}

export default App;
