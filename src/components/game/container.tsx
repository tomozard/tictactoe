//React
import React, { useState, useEffect } from "react";
//Package
import _ from "lodash";
//MUI
import Box from "@material-ui/core/Box";
//Component
import FormCreate from "./formcreate";
import Board from "./board";
//Interface,Enum
import { dataGridInterface, Player } from "./interface";

const Index = () => {
  let data: dataGridInterface[] = [];
  const [boardSquare, setBoardSquare] = useState<string>("3");
  const [winner, setWinner] = useState<string>("");
  const [dataGrid, setDataGrid] = useState<dataGridInterface[]>(data);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [activePlayer, setActivePlayer] = React.useState(Player.A);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
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
    setWinner("");
    renderBoard();
    setOpenDialog(false);
    setIsPlaying(false);
  };

  const checkWin = (t: _.Dictionary<dataGridInterface[]>) => {
    _.map(t, function (r: dataGridInterface[]) {
      r.length === Number(boardSquare) && setWinner(r[0].player);
    });
  };

  const renderBoard = () => {
    data = [];
    const grid = _.times(Number(boardSquare), (n: Number) => {
      return Number(n) + 1;
    });
    grid.map((row) => {
      grid.map((col) => {
        data.push({ row: row, col: col, player: "" });
      });
    });
    setDataGrid(data);
    setIsPlaying(true);
  };

  useEffect(() => {
    const allPlayerClick = _.filter(dataGrid, function (d) {
      return d.player !== "";
    });
    const playerData = _.groupBy(allPlayerClick, "player");

    _.map(playerData, (playerDataGrid) => {
      if (playerDataGrid.length >= 3) {
        // win with -
        const row = _.groupBy(playerDataGrid, "row");
        checkWin(row);
        // win with |
        const col = _.groupBy(playerDataGrid, "col");
        checkWin(col);
        // win with /
        const slash = _.filter(playerDataGrid, function (p) {
          return p.col + p.row === 3 + 1;
        });
        checkWin({ "": slash });
        // win with \
        const backslash = _.filter(playerDataGrid, function (p) {
          return p.col === p.row;
        });
        checkWin({ "": backslash });
      }
    });
  }, [dataGrid]);

  useEffect(() => {
    if (winner !== "") setOpenDialog(true);
  }, [winner]);

  return (
    <Box component="div" pt={4} pb={4}>
      {!isPlaying && (
        <FormCreate
          boardSquare={boardSquare}
          setBoardSquare={setBoardSquare}
          renderBoard={renderBoard}
          isPlaying={isPlaying}
        />
      )}

      {isPlaying && (
        <Board
          activePlayer={activePlayer}
          boardSquare={boardSquare}
          onCheckBoxChange={onCheckBoxChange}
          openDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
          winner={winner}
          dataGrid={dataGrid}
        />
      )}
    </Box>
  );
};

export default Index;
