import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Login from '../pages/login/login'
import Home from '../pages/home/home'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script'
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
