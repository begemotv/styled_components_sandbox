import React, {useState} from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import Login from '../pages/login/login'
import Home from '../pages/home/home'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import themeLight from '../themes/light';
import themeDark from '../themes/dark';

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script'
  }
`;

const App = () => {
  const [theme, setTheme] = useState(themeLight)

  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(state => state.theme.id === 'light' ? themeDark : themeLight);
    }}}>
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
    </ThemeProvider>
  );
}

export default App;
