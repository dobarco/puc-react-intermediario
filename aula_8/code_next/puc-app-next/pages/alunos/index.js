import ListagemAlunos from "../../components/alunos/ListagemAlunos";
import CadastroAlunos from "../../components/alunos/CadastroAlunos";
import { Container } from "../../components/layout/Container";

export default function AlunosPage() {
  const alunos = [{
    id: 1,
    nome: 'Rafael',
    email: 'r@gmail.com',
    telefone: '1111-2222',
    idade: 25
  }];

  const cadastrarAluno = (aluno) => {
    console.log(aluno);
  }
  return (
    <>
      <h1>Alunos</h1>
      <CadastroAlunos onCadastroAluno={cadastrarAluno} />
      <ListagemAlunos alunos={alunos} />
    </>
  )
}
