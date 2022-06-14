import React from 'react';
import {Snackbar, makeStyles} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

const useStyles = makeStyles({
  snack:{
    '& > *':{
      color:"#fff",
      background:"#000000"
    }
  }
})
const SnackBar = ({open, toggleSnack}) => {
  const classes = useStyles()
  const handleClose = ()=>{
    toggleSnack(false)
  }

  return (
      <Snackbar className={classes.snack}open= {open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert severity="info" onClose={handleClose}>
           Number of Images should be between 3 and 200
        </MuiAlert>
      </Snackbar>
  )
};

export default SnackBar;
