import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CommentSharp } from '@mui/icons-material';
import axios  from 'axios';

export default function WashForm() {
    const [Item, setItem] = React.useState();
    
    const [Price, setPrice] = React.useState(0);
    const [totalnumber, settotalnumber] = React.useState(0);
    function handlesettotalnumber(event) {
      settotalnumber(event.target.value);
      // alert(Item)
      // console.log(Item)
  }
      

      
 
 
    function handleItem(event) {
        setItem(event.target.value);
        // alert(Item)
        // console.log(Item)
       
    }

 
     
    function handlesetPrice(event) {
        setPrice(event.target.value);
        // alert(Item)
        // console.log(Item)
    }
       
   
        
    function handleNext(){

      var data = JSON.stringify({
       
        "item": Item,
        "price": Price,
        "totalnumber": totalnumber
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:9090/sales/add',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
        

    }
       

       
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Wash Detailing
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="item"
            name="item"
            label="item name"
            fullWidth
            onChange={handleItem}
            // autoComplete="given-name"
            // variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="price"
            fullWidth
            onChange={handlesetPrice}
            // autoComplete="family-name"
            // variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="totalnumber"
            name="totalnumber"
            label="totalnumber"
            // onChange={handlesetvechicle}
            onChange={handlesettotalnumber}
            // value={vechicle}
            fullWidth
            // // autoComplete="shipping address-level2"
            // variant="standard"
          />
        </Grid>
        
     
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  
                
                

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                      Add Details
                    {/* {activeStep  === steps.length - 1 ? 'Add Details' : 'Next'} */}
                  </Button>
                </Box>
      </Grid>
     
    </React.Fragment>
  );
}