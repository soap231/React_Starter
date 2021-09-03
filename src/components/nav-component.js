
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";


export default function NavComponent() {
    return (
        <Nav>
            <Button>    
                Directory
            </Button>

            <Nav.Item>
                <Nav.Link herf="/">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link herf="#/login">login</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link herf="#/register">register</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
