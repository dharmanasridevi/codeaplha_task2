import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Scheduler from './Scheduler';
import Analytics from './Analytics';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <main>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/scheduler" component={Scheduler} />
              <Route path="/analytics" component={Analytics} />
              <Route path="/" component={Dashboard} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
