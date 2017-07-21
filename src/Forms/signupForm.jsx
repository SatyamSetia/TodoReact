import React from "react";
import axios from "axios";
var formurlencoded = require('form-urlencoded');

export default class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: ''
		};
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUsernameChange(event){
		this.setState({username: event.target.value, email:this.state.email, password: this.state.password});
	}

	handleEmailChange(event){
		this.setState({username:this.state.username, email:event.target.value, password: this.state.password});
	}

	handlePasswordChange(event){
		this.setState({username:this.state.username, email:this.state.email, password: event.target.value});
	}

	handleSubmit(event){
		alert('usrname:'+this.state.username+' email:'+this.state.email+' password: '+this.state.password);
		var url = "http://localhost:1234/signup";
		var user = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password 
		};
		axios.post(url,formurlencoded(user),{"headers" : {"Content-Type" : "application/x-www-form-urlencoded"}}).then(function(response){});
		event.preventdefault();
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit} className={this.props.className}>
				<input type="text" placeholder="Username" onChange={this.handleUsernameChange}/><br/>
				<input type="text" placeholder="Email" onChange={this.handleEmailChange}/><br/>
				<input type="password" placeholder="Password" onChange={this.handlePasswordChange}/><br/>
				<input type="submit" value="Continue to Signup"/>
			</form>
		);
	}
}