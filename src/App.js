import './App.css';
import React from 'react';
import Nav from './Nav';
import Navigation from './Navigation';
import Contact from './Contact';
import Services from './Services';
import Community from './Community';
import Home from './Home';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt, faClock, faPhone } from  "@fortawesome/free-solid-svg-icons";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

library.add( faMapMarkerAlt, faClock, faPhone );

function App() {
  return(

    <Router>
        <Route exact path="/">
            <Redirect to="/Home" />
        </Route>     

        <div className='App'>
            <Navigation />
            <Switch>
              <Route path='/Home'>
                  <Home />
              </Route>
              <Route path='/Services'>
                  <Services />
              </Route>
              <Route path='/Community'>
                <Community />
              </Route>      

              <Route path='/Contact'>
                <Contact />
              </Route>        

            </Switch>    
        </div>          
    </Router>
    
)
}

export default App;
