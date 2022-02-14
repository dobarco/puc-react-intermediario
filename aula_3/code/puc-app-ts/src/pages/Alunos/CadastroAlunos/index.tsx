import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Aluno } from 'types/aluno';

interface AlunoProps {
    onCadastroAluno: (aluno: Aluno) => void
}

export const CadastroAlunos = (props: AlunoProps) => {


    const submitHandler = () => {
        
        props.onCadastroAluno(aluno)
    }

    // Normal state declaration.
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    
    return (
        <h1> Cadastro Alunos </h1>
    )
}