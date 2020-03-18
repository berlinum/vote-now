import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import New from './pages/New';
import Vote from './pages/Vote';
import Result from './pages/Result';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import light from './thems/light';

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
  return (
    <ThemeProvider theme={light}>
      <Router>
        <GlobalStyles />
        <Header />
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
