import React, {useState} from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import Login from '../pages/login/login'
import Home from '../pages/home/home'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import themeLight from '../themes/light';
import themeDark from '../themes/dark';

const GlobalStyle = createGlobalStyle`
  body{
    background: ${p => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${p => p.theme.bodyFontColor};
    font-family: 'Kaushan Script'
  }
`;

const App = () => {
  const [theme, setTheme] = useState(themeLight)

  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(state => state.id === 'light' ? themeDark : themeLight);
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
