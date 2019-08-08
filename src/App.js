import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Normalize, Grid } from '@smooth-ui/core-sc';

import Avatar from './components/Avatar/Avatar';
import Navigation from './components/Navigation/Navigation';
import Error404 from './pages/Error404';
import LoadingWrapper from './components/Loading/LoadingWrapper';
import PageWrapper from './components/ui/PageWrapper';
import Footer from './components/Footer/Footer';
import request from './helpers/request';

const Home = React.lazy(() => import('./pages/Home'));
const Learn = React.lazy(() => import('./pages/Learn'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Contact = React.lazy(() => import('./pages/Contact'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));

function App() {
  const [me, setMe] = useState(null);

  useEffect(() => {
    request.get('author/me').then(res => setMe(res.data.data));
  }, []);

  return (
    <BrowserRouter>
      <Normalize />
      <Grid>
        <Avatar me={me} size={400} />
      </Grid>
      <Navigation />
      <Grid>
        <PageWrapper>
          <Suspense fallback={<LoadingWrapper />}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/nauka-programowania" exact component={Learn} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/blog/:slug" component={BlogPost} />
              <Route path="/panel" exact component={Dashboard} />
              <Route path="/kontakt" exact component={Contact} />
              <Route component={Error404} />
            </Switch>
          </Suspense>
        </PageWrapper>
      </Grid>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
