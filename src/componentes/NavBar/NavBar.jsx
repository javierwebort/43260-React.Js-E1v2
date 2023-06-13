import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Go Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#new">New</Nav.Link>
                        <Nav.Link href="#brands">Brands</Nav.Link>
                        <Nav.Link href="#makeup">Makeup</Nav.Link>
                        <Nav.Link href="#skincare">Skincare</Nav.Link>
                        <Nav.Link href="#hair">Hair</Nav.Link>
                        <Nav.Link href="#fragance">Fragance</Nav.Link>
                        <Nav.Link href="#tools&brush">Tools & Brush</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar