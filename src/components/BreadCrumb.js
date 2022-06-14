import React from "react";
import { Box, TextField, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  component: {
    background: "#f6f6f6",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const BreadCrumb = ({ onTextChange, onCountChange }) => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <TextField
        label="Search Images"
        onChange={(e) => onTextChange(e.target.value)}
      />
      <TextField
        label="Number of Images"
        onChange={(e) => onCountChange(e.target.value)}
      />
    </Box>
  );
};

export default BreadCrumb;
