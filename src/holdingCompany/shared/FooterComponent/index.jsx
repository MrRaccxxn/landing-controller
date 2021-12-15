import { Container, Row, Col, Nav } from "react-bootstrap";

export const FooterComponent = () => {
  return (
    <Container id="footer">
      <Row>
        <Col className="center">
          <p className="textFooter">Esta entidad está supervisada por ASFI</p>
        </Col>
        <Col className="center">
          <h3 className="textFooter">Empresas del Grupo Financiero</h3>
          <div id="navigator">
            <ul>
              <li><a>Banco Fassil</a></li>
              <li><a>Santa Cruz Investments SAFI</a></li>
              <li><a>Santa Cruz Securities Agencia de Bolsa</a></li>
              <li><a>Santa Cruz Seguros Vida y Salud</a></li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
