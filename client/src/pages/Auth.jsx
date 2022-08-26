import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Auth() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Log in</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter your email..." />
          <Form.Control className="mt-3" placeholder="Enter your password..." />
          <Button className="mt-3 align-self-end" variant={"outline-success"}>
            Enter
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
