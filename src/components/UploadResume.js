import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './UploadResume.css';

const UploadResume = () => {
  return (
    <Container className="upload-container mt-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 className="text-center">Upload de Currículo</h2>
          <p className="text-center">Faça o upload do seu currículo em formato PDF ou DOCX</p>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Escolha o arquivo</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Enviar Currículo
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadResume;
