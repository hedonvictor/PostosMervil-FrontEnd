import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../../shared/contexts";


export const LoginForm = () => {
  const navigate = useNavigate();

  const {login} = useAuthContext()

  const [isLoading, setIsLoading] = useState(false);


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async () => {

    setIsLoading(true);

    try {
      await login(username, password)
      setIsLoading(false);

      navigate('/adminPage');
    } catch (error) {
      setIsLoading(false);
      window.alert(error)
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5 text-light">
        <Col md={6}>
          <Form >
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nome de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </Form.Group>

            <Button variant="secondary" type="button" onClick={handleSubmit} className="w-100 mb-3">
              Entrar
            </Button>
            <Button variant="dark"  className="w-100" disabled={isLoading} onClick={() => navigate('/')}>
              ↲ Voltar 
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
