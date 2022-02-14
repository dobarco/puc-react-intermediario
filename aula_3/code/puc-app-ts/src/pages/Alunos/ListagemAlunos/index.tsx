import { Table } from 'react-bootstrap';
import { Aluno } from 'types/aluno';

const ListagemAlunos: React.FC<{ alunos: Aluno[] }> = (props) => {
    console.log(props.alunos);
    return (
        <div className="pt-4">
            <h5>Listagem de Alunos</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>

                    {props.alunos.map((aluno: Aluno) => (
                        <tr>
                            <td>{aluno.nome}</td>
                            <td>{aluno.idade}</td>
                            <td>{aluno.email}</td>
                            <td>{aluno.telefone}</td>
                        </tr>
                        )
                    )}
                </tbody>
            </Table>
        </div>
    )
}
export default ListagemAlunos;