//React
import React from 'react'
//MUI
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
//Interface
import {dataGridInterface} from '../game/board'

function Index(props:any) {
    const data:dataGridInterface = props.data;
    const index:number = props.index;
    const onCheckBoxChange:any = props.onCheckBoxChange;
    const setOnChange = () => {
        if(data.player === ''){
            onCheckBoxChange({...data, player: 'A'}, index)
        }else{
            onCheckBoxChange({...data, player: ''}, index)
        }
    }
    return (
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 100 }}/>}
              checkedIcon={<CloseIcon style={{ fontSize: 100 }}/>}
              name="checked"
              onChange={() => {setOnChange()}}
              checked={data.player !== ''}
            />
          }
          label=""
          style={{margin: 0}}
        />
    )
}

export default Index
