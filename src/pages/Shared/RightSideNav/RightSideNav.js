import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import Brand1 from "../../../assets/Brand/Brand1.png";
import Brand2 from "../../../assets/Brand/Brand2.png";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitch,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const RightSideNav = () => {
  return (
    <Fragment>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle className="me-1" />
          Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub className="me-1" />
          Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5 className="mb-3">Fing us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram /> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "120px" }}
              className="d-block w-100"
              src={Brand1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "120px" }}
              className="d-block w-100"
              src={Brand2}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default RightSideNav;
