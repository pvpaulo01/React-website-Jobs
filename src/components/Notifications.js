import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import './Notifications.css';

const Notifications = () => {
  const notifications = [
    { message: 'Você recebeu uma nova mensagem', time: '2 minutos atrás' },
    { message: 'Sua inscrição foi aprovada', time: '1 hora atrás' },
    { message: 'Atualização disponível', time: 'Ontem' },
  ];

  return (
    <Container className="notifications-container mt-5">
      <h2 className="text-center">Notificações</h2>
      <ListGroup>
        {notifications.map((notification, index) => (
          <ListGroup.Item key={index}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{notification.message}</h5>
              <small>{notification.time}</small>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Notifications;
