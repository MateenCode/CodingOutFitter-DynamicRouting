import React, { Component } from 'react';
import '../styles/App.css';
import data from '../data/data'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


 export default class Bottom extends Component {
  render() {
    return (
      <div className="Bottom">
        {data[1].items.map((bottom) => <div className="col-sm-6" key={data[1].name}>


         <Link to={`/ShowItem/${bottom.id}`} ><h5 className="title">{bottom.name}</h5></Link>
           <div className="w3-card-4" style={{width:"50%"}}>
         <img src={bottom.image}/>
         <h5>{bottom.brand}</h5>
         <h6>${bottom.price}</h6>
         </div>

        </div>)}
      </div>
    );
  }
}
