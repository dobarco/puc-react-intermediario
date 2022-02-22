import { appendFileSync } from 'fs';
import { useEffect, useState } from 'react';
import { Aluno } from 'types/aluno';
import { Container } from '../../containers';
import { CadastroAlunos } from './CadastroAlunos';
import ListagemAlunos from './ListagemAlunos';
import { useGet, usePost } from 'hooks/customHooks';

const Alunos = () => {
    const { apiPost } = usePost('/alunos')
    const [alunos, setAlunos] = useState<Aluno[]>([]);

    const { response, loading, error } = useGet<Aluno[]>('/alunos');

    useEffect(() => {
        if(response)
            setAlunos(response.data)
    }, [response])


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

export default Alunos;