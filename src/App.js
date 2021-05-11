import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { Characters } from './pages/Characters';
import { Comics } from './pages/Comics';
import { Creators } from './pages/Creators';
import { Series } from './pages/Series';
import { Stories } from './pages/Stories';
import { Search } from './pages/Search';

const App = () => {
  return (
    <React.Fragment>
      <Header /> 
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/characters' component={Characters} />
        <Route exact path='/comics' component={Comics} />
        <Route exact path='/creators' component={Creators} />
        <Route exact path='/series' component={Series} />
        <Route exact path='/stories' component={Stories} />
        <Route exact path='/search' component={Search} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
