//React
import React from "react";
//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
//Component
import Input from "./input";
import Dialog from "./dialog";
//Styles
import { gridStyle, gridRightestStyle, gridBottomStyle } from "./styles";
//Interface,Enum
import { dataGridInterface, Player } from "./interface";

const Index = (props: any) => {
  const activePlayer: Player = props.activePlayer;
  const boardSquare: string = props.boardSquare;
  const onCheckBoxChange: (
    inputData: dataGridInterface,
    index: number
  ) => void = props.onCheckBoxChange;
  const openDialog: boolean = props.openDialog;
  const handleCloseDialog: () => void = props.handleCloseDialog;
  const winner: string = props.winner;
  const dataGrid: dataGridInterface[] = props.dataGrid;
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          Turn : {activePlayer}
        </Typography>
        <GridList cellHeight="auto" cols={Number(boardSquare)}>
          {dataGrid.map((d: dataGridInterface, index: number) => {
            let setGridStyle = { ...gridStyle };
            if (d.col === Number(boardSquare)) {
              setGridStyle = { ...setGridStyle, ...gridRightestStyle };
            }
            if (d.row === Number(boardSquare)) {
              setGridStyle = { ...setGridStyle, ...gridBottomStyle };
            }
            return (
              <GridListTile key={index} cols={1} style={{ ...setGridStyle }}>
                <Input
                  data={d}
                  index={index}
                  onCheckBoxChange={onCheckBoxChange}
                  activePlayer={activePlayer}
                ></Input>
              </GridListTile>
            );
          })}
        </GridList>
        <Dialog
          open={openDialog}
          handleClose={handleCloseDialog}
          winner={winner}
        />
      </Grid>

      <Grid item xs={2}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          fullWidth={true}
          onClick={handleCloseDialog}
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};

export default Index;
