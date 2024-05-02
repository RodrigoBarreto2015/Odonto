import Container from "react-bootstrap/esm/Container"
import Nav from "react-bootstrap/esm/Nav"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import BrandIcon from "../../assets/images/brand.jpg";
import "./NavBar.css"
import { Link, Outlet } from "react-router-dom";
import { useRef } from "react";
import Footer from "../Footer/Footer";

const NavbarOs = () => {

    const collapseRef = useRef<HTMLInputElement>(null);

    const hideBars = () => {
        if (collapseRef.current != null) {
            collapseRef.current.setAttribute("class", "navbar-collapse collapse");
        }
    };

    return (
        <>
            <Navbar expand="lg" style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"}} className="bg-white fixed-top">
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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none' }} />
                    <Navbar.Collapse id="basic-navbar-nav" ref={collapseRef}>
                        <Nav className="ms-auto" style={{ textAlign: 'center' }}>
                            <Nav.Link as={Link} className="btn-agendar" to="https://api.whatsapp.com/send?phone=5585988603140&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta%3F"><span>Agendar consulta</span></Nav.Link>
                            <NavDropdown title="Consultas e tratamentos" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} onClick={hideBars} to="/servicos/implante">Implante dentário</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={hideBars} to="/servicos/aparelho">Aparelho ortodôntico</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={hideBars} to="/servicos/clareamento">Clareamento dentário</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={hideBars} to="/servicos/cirurgias">Cirurgias e extrações</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={hideBars} to="/servicos/profilaxia">Profilaxia (Limpeza)</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={hideBars} to="/servicos/protese">Prótese dentária</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={hideBars} to="/servicos/restauracao">Restauração dental</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={hideBars} to="/servicos/tratamento">Tratamento de canal</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={hideBars} to="/servicos/lentes">Facetas em resina</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} onClick={hideBars} to="/sobrenos">Sobre nós</Nav.Link>
                            <Nav.Link as={Link} onClick={hideBars} to="/contato">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className='mt-5 d-flex justify-content-center mb-5 p-4'>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default NavbarOs
