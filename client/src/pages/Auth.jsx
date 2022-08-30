import React from "react";
import { Container, Form, Row, Button, Card } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export default function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Log in" : "Register"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter your email..." />
          <Form.Control className="mt-3" placeholder="Enter your password..." />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Not registered?
                <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
              </div>
            ) : (
              <div>
                Got your account?
                <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
              </div>
            )}
            <Button variant={"outline-success"}>
              {isLogin ? "Enter" : "Registration"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}
