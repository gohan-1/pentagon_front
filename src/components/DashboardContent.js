import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import Chart  from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(vechicle, dates,vechicleType, owner, vechicleNumber, formWash,underWash,steamWash,interiorDetailing,fullWash,total) {
  return { vechicle, dates,vechicleType, owner, vechicleNumber, formWash,underWash,steamWash,interiorDetailing,fullWash,total };
}

const rows = [];





function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

class DashboardContent extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      open: true,
     dbData:null
    }
  }
  async componentWillMount(){

  var dataes;

var config = {
  method: 'get',
  url: 'http://localhost:9090/wash',
  headers: { }
};

const response=await axios(config)

  // console.log(JSON.stringify(response.data));
  // this.setState({dbData:response.data.rows})
  // console.log(response.data.rows)
  dataes=response.data.rows
  for(let i=0;i<dataes.length;i++){
   let value= createData(dataes[i].vechicle, dataes[i].dates,dataes[i].vechicletype, dataes[i].ownername, dataes[i].vechiclenumber, dataes[i].formwash,dataes[i].underwash,dataes[i].steamwash,dataes[i].ineriordetailing,dataes[i].fullwash,dataes[i].totalvalue)
   
   rows.push(value)
  }
  // this.setState({dbData:dataes})

  console.log(rows)


this.setState({dbData:dataes})

console.log(rows)




  }


render(){

  const toggleDrawer = () => {
    this.setState({
      open:!this.state.open
    })
  };
  return (
    
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={this.state.open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(this.state.open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={this.state.open}>
          <Toolbar
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>

        <TableContainer sx={{
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
}} component={Paper}>
      <Table sx={{ mt: 8, mb: 4,minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>vechicle</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">VechicleType</StyledTableCell>
            <StyledTableCell align="right">Owner</StyledTableCell>
            <StyledTableCell align="right">Vechicle Number</StyledTableCell>
            <StyledTableCell align="right">Form Wash</StyledTableCell>
            <StyledTableCell align="right">Under Wash</StyledTableCell>
            <StyledTableCell align="right">Steam Cleaning</StyledTableCell>
            <StyledTableCell align="right">Interior Detailing</StyledTableCell>
            <StyledTableCell align="right">FUll wash</StyledTableCell>
            <StyledTableCell align="right">Grant total</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.vechicle}>
              <StyledTableCell component="th" scope="row">
                {row.vechicle}
              </StyledTableCell>
              <StyledTableCell align="right">{row.dates}</StyledTableCell>
              <StyledTableCell align="right">{row.vechicleType}</StyledTableCell>
              <StyledTableCell align="right">{row.owner}</StyledTableCell>
              <StyledTableCell align="right">{row.vechicleNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.formWash}</StyledTableCell>
              <StyledTableCell align="right">{row.underWash}</StyledTableCell>
              <StyledTableCell align="right">{row.steamWash}</StyledTableCell>
              <StyledTableCell align="right">{row.interiorDetailing}</StyledTableCell>
              <StyledTableCell align="right">{row.fullWash}</StyledTableCell>
              <StyledTableCell align="right">{row.total}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
      
         </Box>
    </ThemeProvider>
  );
  }
}
export default function Dashboard() {
  return <DashboardContent />;
}