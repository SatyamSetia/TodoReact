import React from "react";
import axios from "axios";
import Profile from '../profile.jsx';
var formurlencoded = require('form-urlencoded');

export default class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUsernameChange(event){
		this.setState({username: event.target.value, password: this.state.password});
	}

	handlePasswordChange(event){
		this.setState({username:this.state.username, password: event.target.value});
	}

	handleSubmit(event){
		alert('username:'+this.state.username+' password: '+this.state.password);
		var url = "http://localhost:1234/login";
		var user = {
			username: this.state.username,
			password: this.state.password 
		};
		axios.post(url,formurlencoded(user),{"headers" : {"Content-Type" : "application/x-www-form-urlencoded"}}).then(function(response){
				console.log(user.username+" logged in.");
			}).catch(function(error){console.log(error);});
		event.preventdefault();
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit} className={this.props.className}>
				<input type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange}/><br/>
				<input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
				<input type="submit" value="Continue to Login"/>
			</form>
		);
	}
}