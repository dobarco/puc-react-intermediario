import { useRouter } from 'next/router';


export default function AlunoDetailsPage() {
  const router = useRouter();
  const alunoId = router.query.alunoId

  return (
    <div>
      <h1>Detalhes do Aluno</h1>
    </div>
  )
}
