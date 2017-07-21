import React from "react";

export default class CommonButton extends React.Component{
	
	render(){
		return (<button className={this.props.className} onClick={this.props.onButtonClick}>{this.props.name}</button>);
	}
}