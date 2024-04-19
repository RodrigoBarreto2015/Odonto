import Container from "react-bootstrap/esm/Container"
import Nav from "react-bootstrap/esm/Nav"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import BrandIcon from "../../assets/images/brand.png";
import "./NavBar.css"

export const NavbarOs = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={BrandIcon}
                        width="120"
                        height="90"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ textAlign: 'center' }}>
                        <NavDropdown title="Consultas e tratamentos" id="basic-nav-dropdown">
                            <NavDropdown.Item >Implante dentário</NavDropdown.Item>
                            <NavDropdown.Item >Aparelho ortodôntico</NavDropdown.Item>
                            <NavDropdown.Item >Clareamento dentário</NavDropdown.Item>
                            <NavDropdown.Item >Cirurgias e extrações</NavDropdown.Item>
                            <NavDropdown.Item >Profilaxia (Limpeza)</NavDropdown.Item>
                            <NavDropdown.Item >Prótese dentária</NavDropdown.Item>
                            <NavDropdown.Item >Restauração dental</NavDropdown.Item>
                            <NavDropdown.Item >Tratamento de canal</NavDropdown.Item>
                            <NavDropdown.Item >Lentes de contato dental</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Agende sua consulta
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Sobre nós</Nav.Link>
                        <Nav.Link href="#link">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
