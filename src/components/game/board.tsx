//React
import React, { useState, useEffect } from "react";
//Package
import _ from "lodash";
//MUI
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//Component
import Input from "./input";
import Dialog from "./dialog";

export interface dataGridInterface {
  row: number;
  col: number;
  player: string;
}

export enum Player {
  A = "A",
  B = "B",
}

const gridStyle: React.CSSProperties = {
  textAlign: "center",
  borderBottom: "1px solid #dddddd",
  borderRight: "1px solid #dddddd",
};

const gridRightestStyle: React.CSSProperties = {
  borderRight: "0",
};

const gridBottomStyle: React.CSSProperties = {
  borderBottom: "0",
};

const Index = () => {
  const data: dataGridInterface[] = [
    { row: 1, col: 1, player: "" },
    { row: 1, col: 2, player: "" },
    { row: 1, col: 3, player: "" },
    { row: 2, col: 1, player: "" },
    { row: 2, col: 2, player: "" },
    { row: 2, col: 3, player: "" },
    { row: 3, col: 1, player: "" },
    { row: 3, col: 2, player: "" },
    { row: 3, col: 3, player: "" },
  ];
  const [winner, setWinner] = useState<string>("");
  const [dataGrid, setDataGrid] = useState<dataGridInterface[]>(data);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [activePlayer, setActivePlayer] = React.useState(Player.A);
  const onCheckBoxChange = (inputData: dataGridInterface, index: number) => {
    let selectData = dataGrid[index];
    if (selectData.player === "") {
      dataGrid[index] = { ...selectData, player: activePlayer };
      if (activePlayer === Player.A) {
        setActivePlayer(Player.B);
      } else if (activePlayer === Player.B) {
        setActivePlayer(Player.A);
      }
    }
    setDataGrid([...dataGrid]);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDataGrid(data);
    setWinner("");
  };

  const checkWin = (t: _.Dictionary<dataGridInterface[]>) => {
    _.map(t, function (r: dataGridInterface[]) {
      r.length === 3 && setWinner(r[0].player);
    });
  };

  useEffect(() => {
    const allPlayerClick = _.filter(dataGrid, function (d) {
      return d.player !== "";
    });
    const playerData = _.groupBy(allPlayerClick, "player");

    _.map(playerData, (playerDataGrid) => {
      if (playerDataGrid.length >= 3) {
        const row = _.groupBy(playerDataGrid, "row");
        console.log("🚀 ~ file: Board.tsx ~ line 110 ~ _.map ~ row", row);
        checkWin(row);
        const col = _.groupBy(playerDataGrid, "col");
        checkWin(col);
      }
    });
  }, [dataGrid]);

  useEffect(() => {
    if (winner !== "") setOpenDialog(true);
  }, [winner]);

  return (
    <Box component="div" pt={4} pb={4}>
      <Typography variant="h3" gutterBottom>
        Turn : {activePlayer}
      </Typography>
      <Grid container spacing={2} justify="center" alignItems="center">
        {dataGrid.map((d: dataGridInterface, index: number) => {
          let setGridStyle = { ...gridStyle };
          if (d.col === 3) {
            setGridStyle = { ...setGridStyle, ...gridRightestStyle };
          }
          if (d.row === 3) {
            setGridStyle = { ...setGridStyle, ...gridBottomStyle };
          }
          return (
            <Grid item xs={4} style={{ ...setGridStyle }} key={index}>
              <Input
                data={d}
                index={index}
                onCheckBoxChange={onCheckBoxChange}
                activePlayer={activePlayer}
              ></Input>
            </Grid>
          );
        })}
      </Grid>
      <Dialog
        open={openDialog}
        handleClose={handleCloseDialog}
        winner={winner}
      />
    </Box>
  );
};

export default Index;
