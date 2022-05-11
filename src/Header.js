import { AppBar, Toolbar, Typography, Stack, Button } from "@material-ui/core";
import { Navbar,Nav,Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const st = {
    textdecoration: "none",
}
const nn={
    overflow:'hidden',
    marginBottom: '30px',
    width: '100%',
    top: 0,
    position: 'fixed',
}
export default function Headers(){
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Vmentor.ai</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                <Nav.Link ><Link to="/fill">Fill Form</Link></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
}
