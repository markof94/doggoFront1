import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {NotificationManager} from "react-notifications";

class Register extends React.Component{
    constructor(){
        super();

        this.state = {
            redirectToReferrer: false,
            username: "",
            password: ""
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

    handleSubmit = event =>{
       event.preventDefault();


        const dat = {
            username: this.state.username,
            password: this.state.password
        };

        
        
        //REGISTER
        
            axios.post("http://localhost:5000/register", {username: dat.username, password: dat.password})
                .then(response => {
                    this.setState({
                        redirectToReferrer: true
                    })
                    NotificationManager.success("Account registered successfully!", "Success!");
                }

                ).catch(error => {
                    console.log(error.response)
                })

            
    }

    

    render(){

        if(this.state.redirectToReferrer){
            return <Redirect to = "/" />
        }

        return(
            <div>

                {/*
                    Basic reg form
                */}
                <div className = "text-color-dark">Register a new DOGGO account</div>
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
                        REGISTER
                    </button>
                </form>

            

            </div>
        );
    }
}

export default Register