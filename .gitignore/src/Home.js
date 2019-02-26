import React from "react";
import Login from "./Login";
import Register from "./Register";
import "./index.css";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Logout from "./Logout";
import "react-notifications/lib/notifications.css";
import {NotificationContainer, NotificationManager} from "react-notifications";

class Home extends React.Component{
    constructor(){
        super();

        this.state = {
            loggedIn: false
        }


    }

    render(){
        
       

        const authenticated = localStorage.getItem("accessToken");
        

        return(
            <div>
                <div className = "title">Welcome to DOGGO!</div>
                
                {authenticated ? 
                    <div className = "text-color-dark">
                        LOGGED IN
                        <br />
                        <Logout />
                    </div> 
                    : 
                    <div>
                        <Login />
                        <br />
                        <br />
                        <br />
                        Don't have an account yet?
                        <br />
                        <Link to="/register">
                            <button className = "login-button">REGISTER</button>
                        </Link>
                    </div>
                }
                <br />
                
                <NotificationContainer />
            </div>
        );
    }
}

export default Home