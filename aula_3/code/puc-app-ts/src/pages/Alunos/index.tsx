import { useState } from 'react';
import { Aluno } from 'types/aluno';
import { Container } from '../../containers';
import { CadastroAlunos } from './CadastroAlunos';
import ListagemAlunos from './ListagemAlunos';

export const Alunos = () => {
    const [alunos, setAlunos] = useState<Aluno[]>([{nome:'Rafael', idade:25, email: 'rafael.dobarco@gmail.com', telefone: '22222-2222', id: '1234'}]);

    const cadastrarAluno = () => {
        console.log('cadastrando aluno');
    }
    return (
        <Container>
            <h1>Alunos</h1>
            {/* Cadastro Alunos */}
            <CadastroAlunos onCadastroAluno={cadastrarAluno} />
            {/* Listagem dos Alunos */}
            <ListagemAlunos alunos={alunos} />
        </Container>
    )
}