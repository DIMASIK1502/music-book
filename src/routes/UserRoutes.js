import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom';
import MyMusic from '../pages/MyMusic/MyMusic';

export default class UserRoutes extends Component {
    render() {
        return (
           <Switch>
               <Route path="/" component={MyMusic}></Route>
           </Switch>
        )
    }
}
