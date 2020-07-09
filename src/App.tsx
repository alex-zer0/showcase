import React from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { NAV } from './nav'
import history from './utils/history'
import NotFound from './views/NotFound'
import PageHeader from './components/Header'
import PageFooter from './components/Footer'
import Coloring from './views/coloring/Coloring'
import ColoringDetails from './views/coloring-details/ColoringDetails'
import styled from '@emotion/styled'
import { size, layout, LayoutSize } from './styles/variables'

const Layout = styled.section`
  height: 100vh;
  & > main {
    height: calc(100% - ${size.header} - ${size.footer});
    overflow: auto;
    max-width: ${layout[LayoutSize.LAPTOP]}px;
    margin: 0 auto;
    padding: 1rem;
  }
`

const App: React.FC = () => (
  <Layout>
    <Router history={history}>
      <PageHeader/>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={NAV.Coloring.Index}/>
          </Route>
          <Route path={NAV.Coloring.Index} component={Coloring} exact/>
          <Route path={NAV.Coloring.Details} component={ColoringDetails}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
      <PageFooter/>
    </Router>
  </Layout>
)

export default App
