import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TypesBar from "../components/TypesBar";

export default function Shop() {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypesBar />
        </Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
}
