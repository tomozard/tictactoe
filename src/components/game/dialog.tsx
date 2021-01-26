//React
import React from "react";
//MUI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Index = (props: any) => {
  const open: boolean = props.open;
  const handleClose: any = props.handleClose;
  const winner: string = props.winner;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Game Finish"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="h4" gutterBottom>
            The Winner is {winner}.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Restart Click OK.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Index;
