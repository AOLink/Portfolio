import { Container, Grid } from '@material-ui/core';
import React from 'react';

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'

import {
  Button,
  Form,
  FormControl,
  Nav,
  // Navbar,
  NavLink, 
  NavDropdown,
} from 'react-bootstrap';




import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Container className={'top_60'}>                          
      {/* *Container adds space on both edges or sides of the page* */}
      {/* Profile.js line 36 */}
      <Grid container spacing={7}>
        <Grid item xs={12}
                   sm={12} 
                   md={4} 
                   lg={3}>
          <Profile/>
        </Grid>
        <Grid item xs>
         
          
          <Router>
          <Header />
            <Switch>
            <Nav.Link as={NavLink} to="/" />
             <Route path="/portfolio">
               <Portfolio />          
             </Route>
            
             <Route path="/">
               <Resume />
             </Route>
            </Switch>
          </Router>
          
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
