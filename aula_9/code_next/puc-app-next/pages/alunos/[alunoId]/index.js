// export default function AlunoDetailsPage({aluno}) {
//   return (
//     <div>
//       <h1>Detalhes do Aluno</h1>
//       <ul>
//         <li>{aluno.id}</li>
//         <li>{aluno.nome}</li>
//         <li>{aluno.idade}</li>
//         <li>{aluno.telefone}</li>
//         <li>{aluno.email}</li>
//       </ul>
//     </div>
//   )
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           alunoId: '1'
//         }
//       }
//     ],
//     fallback: false
//   }
// }

// export async function getStaticProps(context) {
//   const alunoId = context.params.alunoId;
//   const response = await fetch(`http://localhost:3001/alunos/${alunoId}`, {method: 'GET'});
//   const data = await response.json();
//   return {
//     props: {
//       aluno: data
//     },
//     revalidate: 5
//   }
// }
