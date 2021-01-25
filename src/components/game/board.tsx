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
  };

  useEffect(() => {
    //console.log("🚀 ~ file: Board.tsx ~ line 49 ~ Index ~ dataGrid", dataGrid);

    const playerClick = _.filter(dataGrid, { player: "a" });
    console.log(
      "🚀 ~ file: Board.tsx ~ line 64 ~ playerClick ~ playerClick",
      playerClick.length,
      playerClick
    );

    if (playerClick.length === 3) {
      setOpenDialog(true);
    }
  }, [dataGrid]);

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
