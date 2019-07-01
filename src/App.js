import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Normalize, Grid } from '@smooth-ui/core-sc';

import Avatar from './components/Avatar/Avatar';
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home';
import Learn from './pages/Learn';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';

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
      <Route path="/" exact component={Home} />
      <Route path="/nauka-programowania" exact component={Learn} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/panel" exact component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
