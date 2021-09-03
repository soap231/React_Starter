import { Form } from "react-bootstrap";


export default function RegisterForm(props){

    const printChange = (e)=>{
        console.log(e.target.value);
    }
    return(
        <Form>
            <Form.Group>
                <Form.Label> Email:</Form.Label>
                <Form.Control name="email" placeholder = "enter Email" onChange={props.changeMethod}></Form.Control>
                <Form.Label> username:</Form.Label>
                <Form.Control name="username" placeholder = "enter username" onChange={props.onChange}></Form.Control>
            </Form.Group>
        </Form>
    )
}

