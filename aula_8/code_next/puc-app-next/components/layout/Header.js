import { Navbar, Nav, Container } from 'react-bootstrap';

function Header(props) {


    return (<Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>
                <Nav.Link>Alunos App</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link >Cadastrar Alunos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header;