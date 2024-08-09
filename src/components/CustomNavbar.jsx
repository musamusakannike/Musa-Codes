import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar className='bg-purple text-light' expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home" className='text-light'>Musa_Codes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className='text-light' href="#about">About</Nav.Link>
            <Nav.Link className='text-light' href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className='text-light' href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <a className='button btn-outline-purple px-4 py-2 text-decoration-none'>Hire Me</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
