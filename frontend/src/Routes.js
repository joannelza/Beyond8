import React from 'react';
import './App.css';
import 'animate.css'
import Home from './components/home';
import After from './components/after'
import {Switch,Route} from 'react-router-dom';
import Layout from './hoc/layout' 
function Routes() {
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/after' exact component={After}/>
        
        </Switch>
      </Layout>
    </div>
  );
}

export default Routes;