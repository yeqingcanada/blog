import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import asyncComponent from './hoc/asyncComponent';

import Layout from './components/UI/Layout/Layout';

const asyncUser = asyncComponent(() => {
  return import('./containers/CreateUser');
});

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
          {/* <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} /> */}
          <Route path="/user" component={asyncUser} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
