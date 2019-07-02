import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Normalize, Grid } from '@smooth-ui/core-sc';

import Avatar from './components/Avatar/Avatar';
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home';
import Learn from './pages/Learn';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';

function App() {
  const [me, setMe] = useState(null);

  useEffect(() => {
    if (!me) {
      fetch('http://localhost:8000/api/me')
        .then(response => response.json())
        .then((data) => setMe(data));
    }
  });
  
  return (
    <BrowserRouter>
      <Normalize />
      <Grid>
        <Avatar me={me} size={400} />
      </Grid>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/nauka-programowania" exact component={Learn} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/panel" exact component={Dashboard} />
        <Route path="/kontakt" exact component={Contact} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
