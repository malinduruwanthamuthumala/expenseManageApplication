import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Expense Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;