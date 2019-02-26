import React from "react";
import Redirect from "react-router-dom/Redirect";


class Logout extends React.Component{
    constructor(){
        super();

        this.logOut = this.logOut.bind(this);
    }

    logOut(){
        localStorage.removeItem("accessToken");
        window.location.reload();
        
    }

    render(){
        return(
            <div>
                <button onClick = {this.logOut} className = "login-button">LOG OUT</button>
            </div>
        );
    }
}

export default Logout