import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Box } from "@material-ui/core";
import BreadCrumb from "./components/BreadCrumb";
import { getImages } from "./services/Api";
import Images from "./components/Images";
import SnackBar from "./components/SnackBar";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(10);
  const [text, setText] = useState("mountains");
  const [open, toggleSnack] = useState(false);
  useEffect(() => {
    if (count < 3 || count > 200) {
      toggleSnack(true);
      return;
    }
    toggleSnack(false);
    getImages(text, count).then((response) => {
      setData(response.data.hits);
      console.log(response.data.hits);
    });
  }, [text, count]);
  const onTextChange = (text) => {
    //  console.log(text)
    setText(text);
  };
  const onCountChange = (count) => {
    setCount(count);
  };
  return (
    <Box>
      <Navbar />
      <BreadCrumb onTextChange={onTextChange} onCountChange={onCountChange} />
      <Images data={data} />
      <SnackBar open={open} toggleSnack={toggleSnack} />
    </Box>
  );
}

export default App;
