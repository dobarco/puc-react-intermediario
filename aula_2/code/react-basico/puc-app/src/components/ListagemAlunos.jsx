import Aluno from "./Aluno";
import { Table } from 'react-bootstrap';


// Responsável pela Listagem dos Alunos.
function ListagemAlunos({ alunos }) {
    let alunosJsx = <tr><td>Nenhum aluno encontrado.</td></tr>;

    if (alunos.length > 0) {
        alunosJsx = alunos.map(a => <Aluno key={a.id} aluno={a} />);
    }
    return (
        <div>
            <h5>Listagem de Alunos</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {alunosJsx}
                </tbody>
            </Table>
        </div>
    );
}

export default ListagemAlunos;