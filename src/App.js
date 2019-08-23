import React, { useState, useEffect, useRef, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Normalize, Grid } from '@smooth-ui/core-sc';

import Avatar from './components/Avatar/Avatar';
import SocialBar from './components/SocialBar/SocialBar';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import Error404 from './pages/Error404';
import LoadingWrapper from './components/Loading/LoadingWrapper';
import PageWrapper from './components/ui/PageWrapper';
import Footer from './components/Footer/Footer';
import request from './helpers/request';
import { UserProvider, unloggedUser } from './userContext';
import UserBar from './components/UserBar/UserBar';

const Home = React.lazy(() => import('./pages/Home'));
const Learn = React.lazy(() => import('./pages/Learn'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Contact = React.lazy(() => import('./pages/Contact'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));

function App() {
  const [me, setMe] = useState(null);
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const [user, setUser] = useState(unloggedUser);

  const sidebarRef = useRef(null);

  const handleClickOutsideSidebar = e =>
    sidebarRef.current && !sidebarRef.current.contains(e.target)
      ? toggleSidebar(false)
      : null;

  useEffect(() => {
    request()
      .get('author/me')
      .then(res => setMe(res.data.data));

    request()
      .get('users/me')
      .then(res => setUser(res.data.data));
    document.addEventListener('mousedown', handleClickOutsideSidebar);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSidebar);
    };
  }, []);

  return (
    <UserProvider value={{ user, setUser }}>
      <div className={isSidebarOpen ? 'sidebarOpen' : 'sidebarClose'}>
        <UserBar />
        <BrowserRouter>
          <Normalize />
          <Grid>
            <Avatar me={me} size={400} />
          </Grid>
          <SocialBar />
          <Navigation
            sidebarToggler={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div ref={sidebarRef}>
            {me && <Sidebar me={me} isOpen={isSidebarOpen} />}
          </div>
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
      </div>
    </UserProvider>
  );
}

export default App;
