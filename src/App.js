import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const Hats = (props) => {
    // console.log(props);
    return (
      <div>Hats Page</div>
    )
}
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact={true} path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
