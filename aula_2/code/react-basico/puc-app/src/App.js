import { useState, useEffect, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ListagemAlunos from './components/ListagemAlunos';
import CadastroAluno from './components/CadastroAluno';
import DetalhesAluno from './components/DetalhesAluno';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import Card from './components/UI/Card';

function App() {

  // States declaration.
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alunos, setAlunos] = useState([]);

  // HTTP Request - Side Effect.
  const fetchAlunosHandler = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch('http://localhost:3001/alunos', { method: 'GET' })
    const data = await response.json();
    setAlunos(data);
    setIsLoading(false);
  }, []);

  //Use Effect specifying a function as a dependency.
  useEffect(() => {
    fetchAlunosHandler();
  }, [fetchAlunosHandler]);

  const cadastrarAluno = async (novoAluno) => {
    try {
      await fetch('http://localhost:3001/alunos', {
        method: 'POST',
        body: JSON.stringify(novoAluno),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    catch (err) {
      setError(err);
    }
  }

  return (
    <Container>
      <Card>
        <Header/>
        {!isLoading && !error &&
          <Switch>
            <Route path="/" exact>
              <WelcomePage alunos={alunos} />
            </Route>
            <Route path="/alunos" exact>
              <ListagemAlunos alunos={alunos} />
            </Route>
            <Route path="/cadastro">
              <CadastroAluno onCadastroAluno={cadastrarAluno} />
            </Route>
            <Route path="/alunos/:id">
              <DetalhesAluno alunos={alunos} />
            </Route>
            <Route path="*" >
              <h1> Page not found. </h1>
              <Redirect to="/alunos" />
            </Route>
          </Switch>
        }
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error.message}</p>}
        </Card>
    </Container>
  );
}

export default App;
