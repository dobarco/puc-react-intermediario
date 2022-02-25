function Aluno({aluno}) {
    return(
        <tr>
            <td>{aluno.nome}</td>
            <td>{aluno.idade}</td>
            <td>{aluno.telefone}</td>
            <td>{aluno.email}</td>
        </tr>
    )
}

export default Aluno;