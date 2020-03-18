import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import New from './pages/New';
import Vote from './pages/Vote';
import Result from './pages/Result';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import light from './themes/light';
import dark from './themes/dark';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [theme, setTheme] = React.useState(dark);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <AppHeader
          onSwitchButtonClick={() => setTheme(theme === dark ? light : dark)}
        />
        <Main>
          <Section>
            <Switch>
              <Route exact path="/">
                <New />
              </Route>
              <Route path="/polls/:pollId/vote">
                <Vote />
              </Route>
              <Route path="/polls/:pollId">
                <Result />
              </Route>
            </Switch>
          </Section>
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
