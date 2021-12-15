import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { FooterComponent } from "../shared/FooterComponent";
import HeaderContactInfo from "../shared/HeaderContactInfo";
import NavBar from "../shared/NavBar";
import { SideBar } from "../shared/SideBar";
import Slider from "./components/Slider";
import TextContent from "./components/TextContent";

const HomePage = () => {
  return (
    <Fragment>
      <Slider />
      <TextContent />
    </Fragment>
  );
};

export default HomePage;
