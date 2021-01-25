//React
import React, { useState } from "react";
//MUI
import Grid from "@material-ui/core/Grid";
//Component
import Input from "./input";

interface dataGridInterface {
  row: number;
  col: number;
  player: number;
}


const gridStyle:React.CSSProperties = {
  textAlign:'center',
  borderBottom:'1px solid #dddddd',
  borderRight:'1px solid #dddddd',
}

const gridRightestStyle:React.CSSProperties = {
  borderRight:'0',
}

const gridBottomStyle:React.CSSProperties = {
  borderBottom:'0',
}


const Index = () => {

  const data:dataGridInterface[] = [];
  const [dataGrid, setDataGrid] = useState(data);

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={4} style={gridStyle}>
        <Input></Input>
      </Grid>
      <Grid item xs={4} style={gridStyle}>
        <Input></Input>
      </Grid>
      <Grid item xs={4} style={{...gridStyle, ...gridRightestStyle}}>
        <Input></Input>
      </Grid>
      <Grid item xs={4} style={gridStyle}>
        <Input></Input>
      </Grid>
      <Grid item xs={4} style={gridStyle}>
        <Input></Input>
      </Grid>
      <Grid item xs={4} style={{...gridStyle, ...gridRightestStyle}}>
        <Input></Input>
      </Grid>
      <Grid item xs={4} style={{...gridStyle,...gridBottomStyle}}>
        <Input></Input>
      </Grid>
      <Grid item xs={4} style={{...gridStyle,...gridBottomStyle}}>
        <Input></Input>
      </Grid>
      <Grid item xs={4} style={{...gridStyle, ...gridRightestStyle,...gridBottomStyle}}>
        <Input></Input>
      </Grid>
    </Grid>
  );
};

export default Index;
