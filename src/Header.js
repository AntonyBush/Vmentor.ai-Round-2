import { AppBar, Toolbar, Typography, Stack, Button, Divider } from "@material-ui/core";
import { Navbar,Nav,Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const st = {
    fontSize: "larger",
    textDecoration: "none",
    color:'white',
    padding: '10px'
}
export default function Headers(){
    return (
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container>
            <Navbar.Brand href="http://vmentor.ai/" style={{fontSize: 'x-large'}} target="_blank">VMentor.ai</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link ><Link style={st} to="/">Home</Link></Nav.Link>
                <Nav.Link ><Link style={st} to="/fill">Fill Form</Link></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
}
