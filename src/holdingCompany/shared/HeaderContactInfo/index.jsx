import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderContactInfo = () => {
  return (
      <Container className="headerContactInfo">
        <Row>
          <Col></Col>
          <Col md="auto">
            <a className="contact" href="mailto:contacto@santacruzfg.com">
              <FontAwesomeIcon className="icon" icon={faEnvelope} color="#747474"/>&emsp;contacto@santacruzfg.com{" "}
            </a>
          </Col>
          <Col md="auto">
            <a className="contact" href="tel:+591-3 (3158000)">
              <FontAwesomeIcon className="icon" icon={faPhone} color="#747474"/>&emsp;+591-3 (3158000)
            </a>
          </Col>
        </Row>
      </Container>
  );
};

export default HeaderContactInfo;
