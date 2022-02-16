import { appendFileSync } from 'fs';
import { useState } from 'react';
import { Aluno } from 'types/aluno';
import { Container } from '../../containers';
import {CadastroAlunos} from './CadastroAlunos';
import ListagemAlunos from './ListagemAlunos';
import { usePost } from 'hooks/customHooks';

export const Alunos = () => {
    const { apiPost } = usePost('/alunos')
    const [alunos, setAlunos] = useState<Aluno[]>([]);
    
    const cadastrarAluno = async (aluno: Aluno) => {
        console.log(aluno);
        await apiPost(aluno);
        setAlunos([...alunos, aluno])
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