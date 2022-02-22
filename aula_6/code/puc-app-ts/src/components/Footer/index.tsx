import {Navbar, Container, NavbarBrand} from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer className="fixed-bottom">
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavbarBrand>React Course - Typescript PUC</NavbarBrand>
                </Container>
            </Navbar>
        </footer>
    )
}