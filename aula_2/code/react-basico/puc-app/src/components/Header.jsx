import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

import { useSelector, useDispatch } from 'react-redux';

function Header() {

    //Accessing the Global State.
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch({type: 'logout'});
    }


    return (<Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>
                <Nav.Link as={Link} to="/">Alunos App</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/alunos">Listagem de Alunos</Nav.Link>
                    {isLoggedIn && <Nav.Link as={Link} to="/cadastro" >Cadastrar Alunos</Nav.Link>}
                    {isLoggedIn && <Nav.Link as={Link} onClick={onLogout} to="/" >Logout</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header;