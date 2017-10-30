import React, {Component} from 'react'
import { Router, browserHistory } from 'react-router'
import RouteComponent from './route.js'

export default class App extends Component {
    render(){
        return (
             <RouteComponent/>
        )
    }
}
