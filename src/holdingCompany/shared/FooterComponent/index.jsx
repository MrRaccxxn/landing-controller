import { Container, Row, Col } from "react-bootstrap";

export const FooterComponent = () => {
  return (
    <Container id="footer">
      <Row>
        <Col className="center" md={8}>
          <p className="textFooter">Esta entidad está supervisada por ASFI</p>
        </Col>
        <Col className="center">
          <h3 className="textFooter">Empresas del Grupo Financiero</h3>
          <div id="navigator">
            <ul>
              <li>
                <a href="banco-fassil">Banco Fassil</a>
              </li>
              <li>
                <a href="santa-cruz-investments-safi">Santa Cruz Investments SAFI</a>
              </li>
              <li>
                <a href="santa-cruz-securities">Santa Cruz Securities Agencia de Bolsa</a>
              </li>
              <li>
                <a href="santa-cruz-seguros-vida-y-salud">Santa Cruz Seguros Vida y Salud</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
