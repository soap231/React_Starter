import HelloWorld from "./hello-world-component";

function HelloWorldFunction(props){
    return <h1> Hello {props.name} from my functional component</h1>
}

export default HelloWorldFunction;