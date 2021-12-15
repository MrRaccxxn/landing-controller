import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "../FooterComponent";
import HeaderContactInfo from "../HeaderContactInfo";
import NavBar from "../NavBar";
import { SideBar } from "../SideBar";

const BlankLayout = () => {
  return (
    <Fragment>
      <HeaderContactInfo />
      <NavBar />
      <Row>
        <Col md="8">
          <div className="content">
            <Outlet/>
          </div>
        </Col>
        <Col md="4" xs="12">
          <SideBar />
        </Col>
        <FooterComponent />
      </Row>
    </Fragment>
  );
};

export default BlankLayout;
