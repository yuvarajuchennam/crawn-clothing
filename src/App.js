import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
const Hats = (props) => {
    // console.log(props);
    return (
      <div>Hats Page</div>
    )
}
function App() {
  return (
    <div>
        <Route exact={false} path="/" component={HomePage}/>
        <Route  path="/hats" component={Hats}/>
    </div>
  );
}

export default App;
