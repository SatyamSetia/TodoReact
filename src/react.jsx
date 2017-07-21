import React from "react";
import ReactDOM from "react-dom";

import MainBox from "./mainBox.jsx";

class HelloWorld extends React.Component{
	render(){
		return <MainBox/>;
	}
}

const ele = <HelloWorld/>
const node = document.getElementById('app');
ReactDOM.render(ele,node);
