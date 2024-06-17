import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Jobs.css';

const Jobs = () => {
  const jobList = [
    { title: 'Desenvolvedor Frontend', company: 'Tech Company', location: 'São Paulo, SP' },
    { title: 'Designer UX/UI', company: 'Design Studio', location: 'Rio de Janeiro, RJ' },
    { title: 'Engenheiro de Software', company: 'Software House', location: 'Curitiba, PR' },
    { title: 'Desenvolvedor Backend', company: 'Tech Company', location: 'São Paulo, SP' },
    { title: 'Estagiário', company: 'Design Studio', location: 'Paraiba, PB' },
    { title: 'Engenheiro', company: 'Engenharia Senior', location: 'Fortaleza,CE' },
  ];

  return (
    <Container className="jobs-container mt-5">
      <h2 className="text-center">Vagas Disponíveis</h2>
      <Row className="justify-content-md-center">
        {jobList.map((job, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                <Card.Text>{job.location}</Card.Text>
                <Card.Link href="#">Ver detalhes</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Jobs;
