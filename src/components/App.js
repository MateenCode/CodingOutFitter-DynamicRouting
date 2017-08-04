import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './BaseLayout.js'
import ShowItem from './ShowItem.js'

import Home from './Home.js';
import Tops from './Tops.js';
import Bottoms from './Bottoms.js';
import Shoes from './Shoes.js';


class App extends Component {
  render() {
    return (
      <div className="App">

      <BrowserRouter>
          <BaseLayout>
            <Switch>

            <Route path="/Tops" component={Tops} />
            <Route path="/Bottoms" component={Bottoms} />
            <Route path="/Shoes" component={Shoes} />
            <Route path='/ShowItem/:id' component={ShowItem} />
            <Route path="/" component={Home} />


            </Switch>
          </BaseLayout>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
