import { ChangeEvent, FormEvent, useReducer, useRef, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Aluno } from 'types/aluno';

// Outside the Component Function.

const emailReducer = (state: {value: string}, action: {type: string, value: string}) => {
    if(action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') };
    }
    if (action.type === 'INPUT_BLUR'){
        return { value: state.value, isValid: action.value.includes('@') };
    }
    if( action.type === 'FORM_CLEANUP'){
        return { value: '', isValid: false};
    }
    return {value: '', isValid: false};
}

const telefoneReducer = (state: {value: string}, action: {type: string, value: string}) => {
    if(action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 8 };
    }
    if (action.type === 'INPUT_BLUR'){
        return { value: state.value, isValid: action.value.trim().length > 8 };
    }
    if( action.type === 'FORM_CLEANUP'){
        return { value: '', isValid: false};
    }
    return {value: '', isValid: false};
}



interface AlunoProps {
    onCadastroAluno: (aluno: Aluno) => void
}

export const CadastroAlunos = (props: AlunoProps) => {

    // Normal state declaration - using useState hook()
    // const [nome, setNome] = useState('');

    const nomeInput = useRef<HTMLInputElement>(null);
    const [idade, setIdade] = useState('');

    // Complex state declaration - using useReducer()
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false})
    const [telefoneState, dispatchTelefone] = useReducer(telefoneReducer, { value: '', isValid: false})

    const nomeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // setNome(event.target.value)
    }
    const idadeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIdade(event.target.value)
    }

    const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatchEmail({ type: 'USER_INPUT', value: event.target.value})
    }

    const telefoneChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatchTelefone({ type: 'USER_INPUT', value: event.target.value})
    }

    const validateTelefoneHandler = () => {
        dispatchTelefone({type: 'INPUT_BLUR', value: ''})
    }

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR', value: ''})
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const aluno = {
            nome: nomeInput.current!.value,
            idade: parseInt(idade),
            telefone: telefoneState.value,
            email: emailState.value
        }
        props.onCadastroAluno(aluno);
        // nomeInput.current.value = '';
        setIdade('');
        dispatchEmail({ type: 'FORM_CLEANUP', value: ''});
        dispatchTelefone({ type: 'FORM_CLEANUP', value: ''});
    }
    
    return (
        <div className="pt-4">
            <h5>Cadastro de Alunos</h5>
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col>
                        {/* <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome do Aluno</Form.Label>
                            <Form.Control required value={nome} name="nome" onChange={nomeChangeHandler} type="text" placeholder="Nome" />
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome do Aluno</Form.Label>
                            <Form.Control required ref={nomeInput} name="nome" type="text" placeholder="Nome" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control required value={telefoneState.value} name="telefone" onBlur={validateTelefoneHandler} onChange={telefoneChangeHandler} type="text" placeholder="Telefone" isValid={telefoneState.isValid} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="idade">
                            <Form.Label>Idade</Form.Label>
                            <Form.Control required value={idade} name="idade" onChange={idadeChangeHandler} type="text" placeholder="Idade" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required value={emailState.value} name="email" onChange={emailChangeHandler} onBlur={validateEmailHandler} type="text" placeholder="Email: at@g.com" isValid={emailState.isValid} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                    </Col>
                </Row>
            </Form>

        </div>
    )
}