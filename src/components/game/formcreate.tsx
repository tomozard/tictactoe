//React
import React from "react";
//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Index = (props:any) => {
    const boardSquare:string = props.boardSquare;
    const setBoardSquare:React.Dispatch<React.SetStateAction<string>> = props.setBoardSquare;
    const renderBoard: () => void = props.renderBoard;
    const isPlaying:boolean = props.isPlaying;
  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Create Board
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField
            fullWidth={true}
            label="Input Grid Number"
            id="outlined-size-normal"
            variant="outlined"
            value={boardSquare}
            defaultValue={3}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setBoardSquare(e.target.value);
            }}
            disabled={false}
            type="number"
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={true}
            onClick={renderBoard}
            style={{ height: "56px" }}
            disabled={isPlaying}
          >
            OK
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Index;
