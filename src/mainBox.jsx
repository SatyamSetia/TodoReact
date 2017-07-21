import React from "react";

import LoginForm from "./Forms/loginform.jsx";
import SignupForm from "./Forms/signupform.jsx";
import CommonButton from "./commonButton.jsx";

export default class MainBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			loginFormState: "form-active",
			loginButton: "active-button tab-button",
			signupFormState: "form-passive",
			signupButton: "passive-button tab-button"
		};
	}

	handleLoginClick(event){
		console.log("login clicked");
		this.setState({loginFormState: "form-active",loginButton:"active-button tab-button", signupFormState: "form-passive",signupButton: "passive-button tab-button"});
	}

	handleSignupClick(event){
		console.log("signup clicked");
		this.setState({loginFormState: "form-passive",loginButton: "passive-button tab-button", signupFormState: "form-active",signupButton:"active-button tab-button"});
	}

	render(){
		return (
			<div className="mainBox row">
				<div className="col-md-6">
					<div className="row blank-left"></div>
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-10">
							<h1 className="title-part1">Some</h1>
							<h1 className="title-part2">text<span className="title-part3">here</span></h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-2"></div>
						<img src="cartoon.png" className="image col-md-8"/>
						<div className="col-md-2"></div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="blank-right row"></div>
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-8">
							<CommonButton name="Login" className={this.state.loginButton} onButtonClick={this.handleLoginClick.bind(this)}/>
							<CommonButton name="Signup" className={this.state.signupButton} onButtonClick={this.handleSignupClick.bind(this)}/>
							<LoginForm className={this.state.loginFormState}/>
							<SignupForm className={this.state.signupFormState}/>
						</div>
						<div className="col-md-2"></div>
					</div>
					<div className="blank row"></div>
				</div>
			</div>
		);
	}
}