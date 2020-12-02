import React,{lazy,Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Skeleton } from 'antd';
const IndexPage = lazy(()=>import('./ThongBao'));
const PostPage = lazy(()=>import('./PostUser/Post'));
const LoginPage = lazy(()=>import('./Login/Login'));
const MessPage = lazy(()=>import('./Mess/ListUser'));
const Firebase = lazy(()=>import('./Firebase/Form'));
function App() {
  return (
    <>
    <Router>
        <Suspense
          fallback={<Skeleton active />}
        >
          <Switch>
            <Route exact path="/">
              <IndexPage />
            </Route>
            <Route path="/post">
              <PostPage />
            </Route>
            <Route path="/firebase">
              <Firebase />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/mess">
              <MessPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
