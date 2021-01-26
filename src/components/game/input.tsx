//React
import React from "react";
//MUI
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import CloseIcon from "@material-ui/icons/Close";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
//Interface
import { dataGridInterface, Player } from "../game/board";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '&.MuiCheckbox-colorSecondary.Mui-disabled':{
          color: '#f50057',
      }
    },
  })
);

function Index(props: any) {
  const classes = useStyles();
  const data: dataGridInterface = props.data;
  const index: number = props.index;
  const onCheckBoxChange: any = props.onCheckBoxChange;
  const activePlayer: Player = props.activePlayer;
  const setOnChange = () => {
    if (data.player === "") {
      onCheckBoxChange({ ...data, player: activePlayer }, index);
    }
  };
  return (
    <FormControlLabel
      control={
        <Checkbox
          className={classes.root}
          icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 100 }} />}
          checkedIcon={
            data.player === Player.A ? (
              <CloseIcon style={{ fontSize: 100 }} />
            ) : (
              <RadioButtonUncheckedIcon style={{ fontSize: 100 }} />
            )
          }
          name="checked"
          onChange={() => {
            setOnChange();
          }}
          checked={data.player !== ""}
          disabled={data.player !== ""}
        />
      }
      label=""
      style={{ margin: 0 }}
    />
  );
}

export default Index;
