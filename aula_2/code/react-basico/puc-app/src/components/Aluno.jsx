import { useHistory } from 'react-router-dom';

function Aluno({ aluno }) {
    const history = useHistory();

    const clickHandler = () => {
        history.push(`/alunos/${aluno.id}`)
    }
    return (
        <tr onClick={clickHandler}>
            <td>{aluno.nome}</td>
            <td>{aluno.idade}</td>
            <td>{aluno.telefone}</td>
        </tr>
    )
}

export default Aluno;