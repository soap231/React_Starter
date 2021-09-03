import { useState } from "react"
import RegisterForm from "./register-form";



export default function Register(props){

    const [credentials, setCredentials] = useState("");

    const handleChange = (e) =>{
        let newCredentials = {...credentials} //spread operator to copy the object
        console.log(e.target.name);
        const object = {name: e.target.value};
        setCredentials(object)
        console.log(object);


        
    }

    return<RegisterForm changeMethod = {handleChange}></RegisterForm>


}