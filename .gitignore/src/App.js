import React, { Component } from 'react';
import './App.css';
import Test from "./Test";
import Home from "./Home";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Register from "./Register";


class App extends Component {


  
  render() {
    return (
     
        <div className="App">

         
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route path="/register" component={Register} />

          </Switch>
            
          
          
         
        </div>
     
    );
  }
}

export default App;
