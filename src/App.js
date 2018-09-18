import React, { Component } from 'react';

import Landing from './component/Landing/Landing';
import Toolbar from './component/Toolbar/Toolbar'
import {Route,Switch} from 'react-router-dom'
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Dashboard from './component/Dashboard/Dashboard';
import Footer from './component/Footer/Footer'


class App extends Component {

  render () {

    return(
  <div>
     <Toolbar />
     <Switch>
      < Route path="/"  exact component={Landing}/>
      <Route path="/Login" component={Login}/>
      <Route path="/signup" component={Signup}/>     
      <Route path="/Dashboard" component={Dashboard}/>      

  </Switch>
  <Footer />

  </div>
    );
  }

}
export default App;
