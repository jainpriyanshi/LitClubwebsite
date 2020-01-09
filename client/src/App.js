import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/carousel";
import Register from "./components/auth/Register";
import Verify from "./components/auth/Verify";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import PrivateNavbar from "./components/private-route/PrivateNavbar";
import Dashboard from "./components/dashboard/Dashboard";
import ImageCreator from "./components/ImageCreator/imageCreator"
import PostDisplay from "./components/ImageCreator/postdisplay"
import PostDisplayById from "./components/ImageCreator/postDisplayById"
import AddBlog from "./components/blog/Addblog"
import bloglist from "./components/blog/Bloglist"
import readblog from "./components/blog/Readblog"
import BloglistById from "./components/blog/BlogListById"

if (localStorage.jwtToken) {

  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);

  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          <Switch>
              <PrivateNavbar  component={Navbar} />
            </Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />            
            <Route exact path="/verify" component={Verify} /> 
            <Switch>
              <PrivateRoute exact path="/posts" component={PostDisplay} />
            </Switch>  
            <Switch>
              <PrivateRoute path="/posts/:id" component={PostDisplayById} />
            </Switch>
            <Switch>
              <PrivateRoute path="/blogs/:id" component={BloglistById} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/addblog" component={AddBlog} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/blogs" component={bloglist} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/readblog" component={readblog} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/template" component={ImageCreator} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
