
import React from "react";

export default class HelloWorld extends React.Component {
    
    //props is read-only
    constructor(props){
        super(props);
        this.name = props.name;
        
    }

    render(){
        //return <h1>Hello {this.props.name}! </h1>
        return <h1>Hello {this.name}! </h1>

    }
}

//export default HelloWorld;