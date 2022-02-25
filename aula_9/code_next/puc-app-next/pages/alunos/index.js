import ListagemAlunos from "../../components/alunos/ListagemAlunos";
import CadastroAlunos from "../../components/alunos/CadastroAlunos";
import { Container } from "../../components/layout/Container";
import { useCallback, useState, useEffect } from "react";

// export async function getStaticProps() {
//   const response = await fetch('http://localhost:3001/alunos', {method: 'GET'});
//   const data = await response.json();

//   return {
//     props: {
//       alunos: data
//     },
//     revalidate: 5
//   }
// }

// export async function getServerSideProps(context){
//   const {req, res} = context;
//   const response = await fetch('http://localhost:3001/alunos', {method: 'GET'});
//   const data = await response.json();
//   return {
//     props:{
//       alunos:data
//     }
//   }
// }


export default function AlunosPage() {
  // const alunos = [{
  //   id: 1,
  //   nome: 'Rafael',
  //   email: 'r@gmail.com',
  //   telefone: '1111-2222',
  //   idade: 25
  // }];

  const [alunos, setAlunos] = useState([]);

  const fetchAlunos = useCallback(async () => {
    const response = await fetch('/api/alunos', { method: 'GET'});
    const data = await response.json();
    setAlunos(data);
  }, []);

  useEffect(() => {
    fetchAlunos();
  }, [fetchAlunos]);

  const [isLoading, setIsLoading] = useState([]);

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
