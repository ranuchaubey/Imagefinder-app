import React from 'react';
import Image from './Image';
import {Grid} from '@material-ui/core'
const Images = ({data}) => {
    console.log("data",data)
  return (
      <Grid container>
          {

       data.map(image=>(
           <Grid xs={3} item key={image.id}>
          <Image Image={image} />
          </Grid>
       ))
       }
       </Grid>
      
      
  )
};

export default Images;
