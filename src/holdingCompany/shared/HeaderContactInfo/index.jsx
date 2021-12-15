import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderContactInfo = () => {
  return (
    <section>
      <Container bg="#F8F8F8">
        <Row>
          <Col></Col>
          <Col md="auto">
            <a className="contact" href="mailto:contacto@santacruzfg.com">
              <FontAwesomeIcon className="icon" icon={faEnvelope} color="#747474"/>contacto@santacruzfg.com{" "}
            </a>
          </Col>
          <Col md="auto">
            <a className="contact" href="tel:+591-3 (3158000)">
              <FontAwesomeIcon className="icon" icon={faPhone} color="#747474"/>+591-3 (3158000)
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeaderContactInfo;
