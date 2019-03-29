import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Normalize, Button, Grid } from '@smooth-ui/core-sc';
import Avatar from './components/Avatar';

import Index from './pages/Index';

class App extends React.Component {
  render() {
    return <>
      <Router>
        <Normalize />
        <Grid>
          <Avatar hash='3c97f5609aeb498c8ba5021fad8b4d6b' />
          app is alive!
          <Button variant="primary">Hello</Button>
        </Grid>
        <Route path="/" exact component={Index} />
      </Router>
    </>;
  }
}

export default App;
