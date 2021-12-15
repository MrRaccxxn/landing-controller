import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import logo from "../../../assets/img/logo.png";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="250px" alt="logo Santa Cruz FG Sociedad Controladora S.A."/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="¿Quiénes somos?" id="collasible-nav-dropdown">
              <NavDropdown.Item href="mision-vision-y-valores">
                Misión, Visión y Valores
              </NavDropdown.Item>
              <NavDropdown.Item href="estructura-de-scfg">
                Estructura de SCFG
              </NavDropdown.Item>
              <NavDropdown.Item href="estados-financieros">
                Estados Financieros
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Empresas del Grupo Financiero"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="banco-fassil">
                Banco Fassil
              </NavDropdown.Item>
              <NavDropdown.Item href="santa-cruz-investments-safi">
                Santa Cruz Investments SAFI
              </NavDropdown.Item>
              <NavDropdown.Item href="santa-cruz-securities">
                Santa Cruz Securities Agencia de Bolsa
              </NavDropdown.Item>
              <NavDropdown.Item href="santa-cruz-seguros-vida-y-salud">
                Santa Cruz Seguros Vida y Salud
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
