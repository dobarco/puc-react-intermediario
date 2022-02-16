import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Home } from './pages/Home';
import { Alunos } from './pages/Alunos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/alunos" component={Alunos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
