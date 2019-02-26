import React from "react";
import "./index.css";
import axios from "axios";

class Login extends React.Component{
    constructor(){
        super();

        this.state = {
            username: "",
            password: "",
            
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        
    }

    handleSubmit(event){
        event.preventDefault();

        const dat = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("http://localhost:5000/auth", {username: dat.username, password: dat.password}
            
        )
            .then(response =>{
                console.log(response)
                
                localStorage.setItem("accessToken", response.data.access_token);
                
                if(localStorage.getItem("accessToken")){
                    console.log("LOGGED IN");
                    window.location.reload();
                }

                
                
            }).catch(error => {
                console.log(error.response)
            })


        
    }

    

    render(){
        return(
            <div>

                {/*
                    Basic login form
                */}
                <div className = "text-color-dark">Log in to DOGGO</div>
                <br />
                <form onSubmit = {this.handleSubmit}>

                  
                    <input
                    type = "text"
                    placeholder = "Username"
                    name = "username"
                    value = {this.state.username}
                    onChange = {this.handleChange}
                    className = "login-box"
                    ></input>

                    <br />

                    <input
                    type = "password"
                    placeholder = "Password"
                    name = "password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                    className = "login-box"
                    ></input>

                    <br />

                    <button className = "login-button">
                        LOG IN
                    </button>
                </form>

                <br />

                <a href = "/">Forgot your password?</a>
                
                
            </div>
        );
    }
}

export default Login