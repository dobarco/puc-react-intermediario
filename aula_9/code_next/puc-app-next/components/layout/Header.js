import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

function Header() {

    return (<Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>
                <Nav.Link as={Link} href="/" >Alunos App</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} href="/alunos">Gerenciar aluno</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header;