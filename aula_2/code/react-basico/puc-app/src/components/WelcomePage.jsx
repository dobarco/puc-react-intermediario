import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import AuthContext from '../store/auth-context';

function WelcomePage(props) {

    const ctx = useContext(AuthContext);
    return (
        <>
            <h1>
                Bem vindo a aplicação de Cadastro de Alunos
            </h1>
            <p><Button onClick={ctx.onLogin}>Login</Button></p>
        </>
    );
}

export default WelcomePage;