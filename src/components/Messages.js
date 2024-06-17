import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import './Messages.css';

const Messages = () => {
  const messages = [
    { sender: 'João Silva', content: 'Olá, gostaria de saber mais sobre a vaga.', time: '2 minutos atrás' },
    { sender: 'Maria Oliveira', content: 'Enviei meu currículo para análise.', time: '1 hora atrás' },
    { sender: 'Pedro Santos', content: 'Obrigado pelo retorno rápido.', time: 'Ontem' },
  ];

  return (
    <Container className="messages-container mt-5">
      <h2 className="text-center">Mensagens</h2>
      <ListGroup>
        {messages.map((message, index) => (
          <ListGroup.Item key={index}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{message.sender}</h5>
              <small>{message.time}</small>
            </div>
            <p className="mb-1">{message.content}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Messages;
