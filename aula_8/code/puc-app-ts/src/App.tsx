import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";

const lazyHome = React.lazy(() => import('./pages/Home'));
const lazyAlunos = React.lazy(() => import('./pages/Alunos'));

const link = from([
  new HttpLink({ uri: "http://localhost:3001/graphql" })
])


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <React.Suspense fallback="Loading...">
          <ApolloProvider client={client}>
            <Route path="/" exact component={lazyHome} />
            <Route path="/alunos" component={lazyAlunos} />
          </ApolloProvider>
        </React.Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
