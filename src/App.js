
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NewsPage from './components/NewsPage'
import UserPage from './components/UserPage'
import SideBar from './components/SideBar'
import PointsPage from './components/points/PointsPage'
import MemoriesPage from './components/memories/MemoriesPage'
import EventsPage from './components/events/EventsPage'
import './App.css';


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
            <Route path='/points'>
              <PointsPage />
            </Route>
            <Route path='/events'>
              <EventsPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
