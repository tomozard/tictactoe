//React
import React, { useState, useEffect } from "react";
//Package
import _ from "lodash";
//MUI
import Grid from "@material-ui/core/Grid";
//Component
import Input from "./input";
import Dialog from "./dialog";

export interface dataGridInterface {
  row: number;
  col: number;
  player: string;
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
  const [isWonbyRow, setIsWonbyRow] = useState<boolean>(false);
  const [dataGrid, setDataGrid] = useState<dataGridInterface[]>(data);
  const [openDialog, setOpenDialog] = React.useState(false);
  const onCheckBoxChange = (inputData: dataGridInterface, index: number) => {
    let selectData = dataGrid[index];
    if (selectData.player === "") {
      dataGrid[index] = { ...selectData, player: "a" };
    } else {
      dataGrid[index] = { ...selectData, player: "" };
    }
    setDataGrid([...dataGrid]);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDataGrid(data);
    setIsWonbyRow(false);
  };

  const checkWin = (t: _.Dictionary<dataGridInterface[]>) => {
    _.map(t, function (r: dataGridInterface[]) {
      console.log(
        _.filter(r, function (d) {
          return d.player === "a";
        }).length
      );
      // console.log(_.countBy(r, 'player'));
      // const p = _.countBy(r, 'player');
      if (
        _.filter(r, function (d) {
          return d.player === "a";
        }).length === 3
      ) {
        setIsWonbyRow(true);
      }
    });
  }

  useEffect(() => {
    //console.log("🚀 ~ file: Board.tsx ~ line 49 ~ Index ~ dataGrid", dataGrid);
    const playerClick = _.filter(dataGrid, function (d) {
      return d.player === "a";
    });

    if (playerClick.length >= 3) {
      //check row
      // console.log(_.groupBy(playerClick, 'row'));
      const row = _.groupBy(playerClick, "row");
      checkWin(row);
      const col = _.groupBy(playerClick, "col");
      checkWin(col);
    }
  }, [dataGrid]);

  useEffect(() => {
    if (isWonbyRow) setOpenDialog(true);
  }, [isWonbyRow]);

  return (
    <>
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
              ></Input>
            </Grid>
          );
        })}
      </Grid>
      <Dialog open={openDialog} handleClose={handleCloseDialog} />
    </>
  );
};

export default Index;
