import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch ,Route,Routes} from 'react-router-dom'
// import { Route } from 'react-router';
import Dashbord from './components/DashboardContent'
import SalesForm from './components/SalesForm';
import Checkout  from './components/Checkout';

import WashForm from './components/WashForm';
import SalesCheckout from './components/SalesCheckout'
// import { Router } from '@mui/icons-material';

function App() {
  return (
  
      <Router>
       
      <div className="App">
      </div>

      <Routes>
        <Route path="" element={<Dashbord></Dashbord>}></Route>
        <Route path="/addWash" element={<Checkout></Checkout>}></Route>
        <Route path="/addSale" element={<SalesCheckout></SalesCheckout>}></Route>
        <Route path="/dashbord" element={<Dashbord></Dashbord>}></Route>

        </Routes>
    
    
       
      </Router>
 
  );
}

export default App;
