import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup, Carousel } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'João Silva',
      content: 'Adorei a nova vaga que encontrei aqui!',
      likes: 10,
      comments: [],
    },
    {
      id: 2,
      author: 'Maria Oliveira',
      content: 'Alguém mais viu a atualização recente?',
      likes: 5,
      comments: [],
    },
  ]);

  const [comment, setComment] = useState('');

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleComment = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, comments: [...post.comments, comment] } : post
    );
    setPosts(updatedPosts);
    setComment('');
  };

  const handleShare = () => {
    alert('Post compartilhado!');
  };

  const jobList = [
    { title: 'Desenvolvedor Frontend', company: 'Tech Company', location: 'São Paulo, SP' },
    { title: 'Designer UX/UI', company: 'Design Studio', location: 'Rio de Janeiro, RJ' },
    { title: 'Engenheiro de Software', company: 'Software House', location: 'Curitiba, PR' },
  ];

  return (
    <div className="home-page">
      <div className="carousel-container">
        <Carousel className="rounded-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/imagens/reuniao.jpg"
              alt="Primeira reunião"
            />
        
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/imagens/reuniao2.jpg"
              alt="Segunda reunião"
            />
       
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/imagens/reuniao3.jpeg"
              alt="Terceira reunião"
            />
         
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='home-message'>
        <h1 >"Seja Mais Competitivo profissionalmente"</h1>
      </div>
      <div className='feed-text'>
        <h1>Feed e Comentários</h1>
        <h1>Vagas</h1>
       </div>
       <hr/>
      <Container className="home-container mt-5">
        <Row>
          <Col md={8}>
           
            {posts.map((post) => (
              <Card key={post.id} className="mb-4">
                <Card.Body>
                  <Card.Title>{post.author}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                  <Button variant="outline-primary" onClick={() => handleLike(post.id)} className="me-2">
                    Curtir ({post.likes})
                  </Button>
                  <Button variant="outline-secondary" onClick={handleShare} className="me-2">
                    Compartilhar
                  </Button>
                  <Form className="mt-3" onSubmit={(e) => { e.preventDefault(); handleComment(post.id); }}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Adicione um comentário"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-2">Comentar</Button>
                  </Form>
                  <ListGroup className="mt-3">
                    {post.comments.map((comment, index) => (
                      <ListGroup.Item key={index}>{comment}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={4}>
            {jobList.map((job, index) => (
              <Card key={index} className="mb-4">
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                  <Card.Text>{job.location}</Card.Text>
                  <Button variant="outline-primary">Ver Detalhes</Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
    
  );
};

export default Home;
