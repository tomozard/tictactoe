//React
import React from 'react'
//MUI
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

function Index() {
    return (
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 100 }}/>}
              checkedIcon={<CloseIcon style={{ fontSize: 100 }}/>}
              name="checked"
            />
          }
          label=""
          style={{margin: 0}}
        />
    )
}

export default Index
