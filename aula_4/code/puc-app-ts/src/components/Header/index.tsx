import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Nav.Link as={Link} to="/">Alunos App</Nav.Link>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/alunos">Gerenciar aluno </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}