import { appendFileSync } from 'fs';
import { useEffect, useState } from 'react';
import { Aluno } from 'types/aluno';
import { Container } from '../../containers';
import { CadastroAlunos } from './CadastroAlunos';
import ListagemAlunos from './ListagemAlunos';
import { useGet, usePost } from 'hooks/customHooks';

import { useQuery, useMutation } from '@apollo/client';
import { LOAD_ALUNOS } from 'graphql/Queries';
import { CREATE_ALUNO_MUTATION } from 'graphql/Mutations';
const Alunos = () => {
    const { apiPost } = usePost('/alunos')
    const [alunos, setAlunos] = useState<Aluno[]>([]);

    // const { response, loading, error } = useGet<Aluno[]>('/alunos');

    // useEffect(() => {
    //     if(response)
    //         setAlunos(response.data)
    // }, [response])
    const { data, loading, error} = useQuery(LOAD_ALUNOS);
    const [createAluno, {error:err}] = useMutation(CREATE_ALUNO_MUTATION)

    useEffect(() => {
        console.log(data);
        if(data) {
            setAlunos(data.getAllAlunos)
        }
    }, [data])

    
    // const cadastrarAluno = async (aluno: Aluno) => {
    //     console.log(aluno);
    //     await apiPost(aluno);
    //     setAlunos([...alunos, aluno])
    // }

    const cadastrarAluno = (aluno: Aluno) => {
        createAluno({
            variables: {
                nome: aluno.nome,
                idade: aluno.idade,
                email: aluno.email,
                telefone: aluno.telefone
            }
        });
        setAlunos([...alunos, aluno])
        if(err){
            console.log(err);
        }
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