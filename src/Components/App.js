
import React from "react";
import Dashboard from "./home/Dashboard";
import Signup from "./home/Signup";
import Login from "./home/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./home/Home";
import { Testing } from "./home/Testing";
function App()
{
 return (
    
 <Router>
        <Switch>
            <Route exact path = "/" component = {Login} />
            <Route path = "/login" component = {Login} />
            <Route path = "/register" component = {Signup} />
        
            {/* <Route path = "*" component = {ZeroFourZero} /> */}
        </Switch>
    </Router>



 )


}

export default App;