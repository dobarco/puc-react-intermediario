import { useState, useReducer, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

//Outside the Component Function.
const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    if (action.type === 'FORM_CLEANUP') {
        return { value: '', isValid: false };
    }
    return { value: '', isValid: false };
}

const telefoneReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 8 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 8 };
    }
    if (action.type === 'FORM_CLEANUP') {
        return { value: '', isValid: false };
    }
    return { value: '', isValid: false };
}

function CadastroAlunos(props) {

    // Normal state declaration.
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

    // Use Reducer state declaration.
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false });
    const [telefoneState, dispatchTelefone] = useReducer(telefoneReducer, { value: '', isValid: false });

    // States for field validation.
    const [isFormValid, setIsFormValid] = useState(false);

    const { isValid: emailIsValid } = emailState;
    const { isValid: telefoneIsValid } = telefoneState;

    useEffect(() => {
        setIsFormValid(emailIsValid && telefoneIsValid);
    }, [emailIsValid, telefoneIsValid])


    const nomeChangeHandler = (event) => {
        setNome(event.target.value);
    };

    const idadeChangeHandler = (event) => {
        setIdade(event.target.value);
    };

    const telefoneChangeHandler = (event) => {
        dispatchTelefone({ type: 'USER_INPUT', val: event.target.value });
        setIsFormValid(event.target.value.trim().length > 8 && emailState.isValid);
    };

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
        setIsFormValid(event.target.value.includes('@') && telefoneState.isValid);
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    }

    const validateTelefoneHandler = () => {
        dispatchTelefone({ type: 'INPUT_BLUR' });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!isFormValid)
            return;

        const aluno = {
            nome,
            idade,
            telefone: telefoneState.value,
            email: emailState.value
        }
        props.onCadastroAluno(aluno);
        setNome('');
        setIdade('');
        dispatchEmail({ type: 'FORM_CLEANUP' });
        dispatchTelefone({ type: 'FORM_CLEANUP' });
    };

    return (
        <div className="cadastro_aluno">
            <h5>Cadastro de Alunos</h5>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome do Aluno</Form.Label>
                    <Form.Control required name="nome" onChange={nomeChangeHandler} value={nome} type="text" placeholder="Nome" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="idade">
                    <Form.Label>Idade</Form.Label>
                    <Form.Control required onChange={idadeChangeHandler} value={idade} type="text" placeholder="Idade" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control required name="telefone" onChange={telefoneChangeHandler} onBlur={validateTelefoneHandler} value={telefoneState.value} type="text" placeholder="Telefone" isValid={telefoneState.isValid} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required onChange={emailChangeHandler} onBlur={validateEmailHandler} value={emailState.value} type="text" placeholder="Email" isValid={emailState.isValid} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!isFormValid}>
                    Cadastrar
                </Button>
            </Form>
        </div>
    );
}

export default CadastroAlunos;

