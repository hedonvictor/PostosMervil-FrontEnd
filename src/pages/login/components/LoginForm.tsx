import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    //event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5 text-light">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nome de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="secondary" type="submit" className="w-100 mb-3">
              Entrar
            </Button>
            <Button variant="dark"  className="w-100" onClick={() => navigate('inicio')}>
              ↲ Voltar 
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
