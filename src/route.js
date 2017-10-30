import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import NavComponent from "./components/NavComponent.js"
import HomeComponent from "./components/HomeComponent.js"
import AboutComponent from "./components/AboutComponent.js"

export default class RouteComponent extends Component
{
    render() {
        return (
            <Router>
                 <div>
                 <NavComponent />
                 <Route exact path="/" component={HomeComponent}/>
                 <Route path="/about" component={AboutComponent}/>
                </div>
           </Router>
        )
    }
}
