import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <Container className="contact-container mt-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 className="text-center">Contato</h2>
          <p className="text-center">Preencha o formulário abaixo para entrar em contato conosco</p>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Seu nome" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Seu email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Sua mensagem" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
