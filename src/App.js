import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from './components/layout/navbar';
import Dashboard from "./components/dashboard/dashboard";
import ProjectDetails from "./components/projects/projectDetails";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import CreateProject from "./components/projects/createProjects";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/details/:id" component={ProjectDetails} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/create" component={CreateProject} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
