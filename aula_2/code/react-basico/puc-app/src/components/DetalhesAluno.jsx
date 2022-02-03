import { useParams } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

function DetalhesAluno({alunos}) {
    const params = useParams();
    const aluno = alunos.find(a => a.id.toString() === params.id)

    return (
        <div>
            <h5>Detalhes do Aluno</h5>
            <ListGroup>
                <ListGroup.Item>ID: {aluno.id}</ListGroup.Item>
                <ListGroup.Item>Nome: {aluno.nome}</ListGroup.Item>
                <ListGroup.Item>Idade: {aluno.idade}</ListGroup.Item>
                <ListGroup.Item>Telefone: {aluno.telefone}</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default DetalhesAluno