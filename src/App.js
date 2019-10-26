import React from 'react';
import './App.css';
import NewsPage from './components/NewsPage'
import UserPage from './components/UserPage'
import SideBar from './components/SideBar'
import MemoriesPage from './components/memories/MemoriesPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div class="container-fluid">
        <div class='row'>
          <SideBar />
          <Switch>
            <Route exact path='/'>
              <NewsPage />
            </Route>
            <Route path='/me'>
              <UserPage />
            </Route>
            <Route path='/memories'>
              <MemoriesPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
