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
import {useNavigate} from 'react-router-dom';

export default function WashForm() {
    const [firstName, setFirstName] = React.useState();
    const [vechicleNumber, setvechicleNumber] = React.useState();
    const [vechicle, setvechicle] = React.useState();
    const [VechicleType, setVechicleType] = React.useState();
    const [formWash, setformWash] = React.useState(0);
    const [underbody, setunderbody] = React.useState(0);
    const [interiorDetailing, setinteriorDetailing] = React.useState(0);
    const [steamcleaning, setsteamcleaning] = React.useState(0);
    const [FullbodyWash, setFullbodyWash] = React.useState(0);
    const [total, settotal] = React.useState(0);
    function handleFirstName(event) {
        setFirstName(event.target.value);
        // alert(firstName)
        // console.log(firstName)
       
    }
    const navigate = useNavigate();

  
    function handlesetvechicleNumber(event) {
        setvechicleNumber(event.target.value);
        // alert(firstName)
        // console.log(firstName)
    }
    function handlesetvechicle(event) {
        setvechicle(event.target.value);
        // alert(firstName)
        // console.log(firstName)
    }
       
    function handlesetVechicleType(event) {
        setVechicleType(event.target.value);
        // alert(firstName)
        // console.log(firstName)
    }
       
    function handlesetformWash(event) {
        setformWash(event.target.value);
        // alert(firstName)
        // console.log(firstName)
    }
       
    function handlesetunderbody(event) {
        setunderbody(event.target.value);
        // alert(firstName)
        // console.log(firstName)
    }
        
    function handlesetinteriorDetailing(event) {
        setinteriorDetailing(event.target.value);
        // alert(firstName)
        // console.log(firstName)
    }
        
    function handlesetsteamcleaning(event) {
        setsteamcleaning(event.target.value);
        // alert(firstName)
        // console.log(firstName)
    }
        
    function handlesetFullbodyWash(event) {
        setFullbodyWash(event.target.value);
        // alert(firstName)
        // console.log(firstName)
    }
    function handleNext(){

      var data = JSON.stringify({
        "vechicle": vechicle,
        "vechicletype": VechicleType,
        "vechiclenumber": vechicleNumber,
        "ownername": firstName,
        "formwash": formWash,
        "underwash": underbody,
        "steamwash": steamcleaning,
        "interiorDetailing": interiorDetailing,
        "fullWash": FullbodyWash,
        "total":parseInt(formWash)+parseInt(FullbodyWash)+parseInt(underbody)+parseInt(steamcleaning)+parseInt(interiorDetailing)
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:9090/wash/add',
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
        
      navigate('/dashbord')
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
            id="firstName"
            name="firstName"
            label="First name"
            onChange={handleFirstName}
            fullWidth
            value={firstName}
            
          />
        </Grid>
        {console.log(firstName)}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vechicleNumber"
            name="vechicleNumber"
            label="vechicleNumber"
            onChange={handlesetvechicleNumber}
            value={vechicleNumber}
            fullWidth
            // autoComplete="family-name"
            // variant="standard"
          />
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vechicle"
            name="vechicle"
            label="car/bike"
            onChange={handlesetvechicle}
            value={vechicle}
            fullWidth
            // autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="VechicleType"
            name="VechicleType"
            label="VechicleType"
            onChange={handlesetVechicleType}
            value={VechicleType}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="formWash"
            name="formWash"
            label="form Wash Rate"
            onChange={handlesetformWash}
            value={formWash}
            fullWidth
            defaultValue="0"
            // autoComplete="shipping postal-code"
            // variant="standard"
          
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="underbody"
            name="underbody"
            label="under body wash rate"
            onChange={handlesetunderbody}
            value={underbody}
            fullWidth
            defaultValue="0"
            // autoComplete="shipping country"
            // variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="steamcleaning"
            name="steamcleaning"
            label="steam cleaning Rate"
            onChange={handlesetsteamcleaning}
            value={steamcleaning}
            fullWidth
            defaultValue="0"
            // autoComplete="shipping postal-code"
            // variant="standard"
          
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="interiorDetailing"
            name="interiorDetailing"
            label="interior Detailing rate"
            onChange={handlesetinteriorDetailing}
            value={interiorDetailing}
            fullWidth
            defaultValue="0"
            // autoComplete="shipping country"
            // variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="FullbodyWash"
            name="FullbodyWash"
            label="FullbodyWash rate"
            onChange={handlesetFullbodyWash}
            value={FullbodyWash}
            fullWidth
            defaultValue="0"
            // autoComplete="shipping country"
            // variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="total"
            name="total"
            label="total"
            fullWidth
            
            value={parseInt(formWash)+parseInt(FullbodyWash)+parseInt(underbody)+parseInt(steamcleaning)+parseInt(interiorDetailing)}
            // autoComplete="shipping country"
            onChange={e=>{
                settotal(e.target.value)
            }}
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