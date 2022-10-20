import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftSideNav from "../pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Row>
          <Col lg="2">
            <LeftSideNav />
          </Col>
          <Col lg="7">
            <Outlet />
          </Col>
          <Col lg="3">
            <RightSideNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Main;
