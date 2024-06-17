import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Jobs from './components/Jobs';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import UploadResume from './components/UploadResume';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
                <Nav.Link as={Link} to="/jobs">Vagas</Nav.Link>
                <Nav.Link as={Link} to="/notifications">Notificações</Nav.Link>
                <Nav.Link as={Link} to="/messages">Mensagens</Nav.Link>
                <Nav.Link as={Link} to="/upload-resume">Upload de Currículo</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Pesquisar"
                  className="me-2 rounded-pill"
                  aria-label="Search"
                />
                <Button variant="outline-light" className="rounded-pill">Buscar</Button>
              </Form>
              <Nav>
                <NavDropdown title="" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Seu Perfil</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Propostas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Trocar senha</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Navbar.Brand href="/">
              <img
                src="/imagens/perfil.jpg"
                alt="Perfil"
                className="profile-pic"
              />
            </Navbar.Brand>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/upload-resume" element={<UploadResume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
