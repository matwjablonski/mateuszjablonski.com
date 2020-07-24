import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Normalize, Grid } from '@smooth-ui/core-sc';

import Avatar from './components/Avatar/Avatar';
import SocialBar from './components/SocialBar/SocialBar';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import Error404 from './pages/Error404';
import PageWrapper from './components/ui/PageWrapper';
import Footer from './components/Footer/Footer';
import { requestDoc, requestDocBy } from './helpers/request';
import { UserProvider, unloggedUser } from './userContext';
import UserBar from './components/UserBar/UserBar';
import { MeProvider } from './meContext';
import { auth } from './firebase';

const Home = React.lazy(() => import('./pages/Home'));
const Learn = React.lazy(() => import('./pages/Learn'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Page = React.lazy(() => import('./pages/Page'));
const Contact = React.lazy(() => import('./pages/Contact'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Glossary = React.lazy(() => import('./pages/Glossary'));

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const MyMeetings = React.lazy(() => import('./pages/MyMeetings'));

const NewPost = React.lazy(() => import('./pages/NewPost'));
const UsersList = React.lazy(() => import('./pages/UsersList'));
const User = React.lazy(() => import('./pages/User'));
const NewGlossary = React.lazy(() => import('./pages/NewGlossary'));

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
    requestDoc('author', 'me')
      .then(res => setMe(res));

    auth.onAuthStateChanged((user) => {
      if (user) {
        requestDocBy('users', 'email', user.email)
          .then(res => setUser(res));
      }
    });

    document.addEventListener('mousedown', handleClickOutsideSidebar);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSidebar);
    };
  }, []);

  return (
    <UserProvider value={{ user, setUser }}>
      <div className={isSidebarOpen ? 'sidebarOpen' : 'sidebarClose'}>
        <BrowserRouter>
          <MeProvider value={me}>
            <Normalize />
            <UserBar />
            <Grid>
              <Avatar size={400} />
            </Grid>
            <SocialBar />
            <Navigation
              sidebarToggler={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
            <div ref={sidebarRef}>
              {me && <Sidebar isOpen={isSidebarOpen} />}
            </div>
            <Grid>
              <PageWrapper>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/nauka-programowania" exact component={Learn} />
                  <Route path="/admin" exact component={Dashboard} />
                  <Route path="/admin/posts/new" exact component={NewPost} />
                  <Route
                    path="/admin/glossary/new"
                    exact
                    component={NewGlossary}
                  />
                  <Route path="/admin/users" exact component={UsersList} />
                  <Route
                    path="/admin/users/:type"
                    exact
                    component={UsersList}
                  />
                  <Route
                    path="/admin/users/:id/:action"
                    exact
                    component={User}
                  />
                  <Route path="/blog" exact component={Blog} />
                  <Route path="/blog/:slug" component={BlogPost} />
                  <Route path="/panel" exact component={Dashboard} />
                  <Route
                    path="/panel/moje-spotkania"
                    exact
                    component={MyMeetings}
                  />
                  <Route path="/kontakt" exact component={Contact} />
                  <Route path="/p/:slug" exact component={Page} />
                  <Route path="/slownik" exact component={Glossary} />
                  <Route component={Error404} />
                </Switch>
              </PageWrapper>
            </Grid>
            <Footer />
          </MeProvider>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
