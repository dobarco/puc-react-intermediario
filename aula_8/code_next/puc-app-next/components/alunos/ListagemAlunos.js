import { Table } from 'react-bootstrap';
import  Aluno  from './Aluno';

function ListagemAlunos({alunos}) {

    let alunosJsx = <tr><td>Nenhum aluno cadastrado até o momento</td></tr>;

    if(alunos.length> 0){
        alunosJsx = alunos.map(a => <Aluno key={a.id} aluno={a} />);
    }
    return (
        <div>
            <h5> Listagem de Alunos</h5>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Telefone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {alunosJsx}
                </tbody>
            </Table>
        </div>
    )
}

export default ListagemAlunos;