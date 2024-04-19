import Container from "react-bootstrap/esm/Container"
import Nav from "react-bootstrap/esm/Nav"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import BrandIcon from "../../assets/images/brand.png";
import "./NavBar.css"
import { Link, Outlet } from "react-router-dom";
import ButtonGlobal from "../Button/Button";
import { useState } from "react";

const NavbarOs = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 200) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return (
        <>
            <Navbar expand="lg" className={colorChange ? "bg-body-tertiary fixed-top" : "bg-transparent fixed-top"}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src={BrandIcon}
                            width="120"
                            height="90"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: 'none'}}/>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto" style={{textAlign: 'center' }}>
                            <NavDropdown title="Consultas e tratamentos" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/servicos/implante">Implante dentário</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/servicos/aparelho">Aparelho ortodôntico</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/servicos/clareamento">Clareamento dentário</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/servicos/cirurgias">Cirurgias e extrações</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/servicos/profilaxia">Profilaxia (Limpeza)</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/servicos/protese">Prótese dentária</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/servicos/restauracao">Restauração dental</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/servicos/tratamento">Tratamento de canal</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/servicos/lentes">Lentes de contato dental</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    <ButtonGlobal text="Agendar consulta" />
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/sobrenos">Sobre nós</Nav.Link>
                            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className='mt-5 d-flex justify-content-center'>
                <Outlet />
            </Container>
        </>
    )
}

export default NavbarOs
