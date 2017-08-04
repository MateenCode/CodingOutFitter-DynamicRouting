import React, { Component } from 'react';
import '../styles/App.css';
import data from '../data/data'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

 export default class Shoes extends Component {
  render() {
    return (
      <div className="Shoes">
      {data[2].items.map((shoes) => <div className="col-sm-6" key={data[2].name}>


       <Link to={`/ShowItem/${shoes.id}`} ><h5 className="title">{shoes.name}</h5></Link>
         <div className="w3-card-4" style={{width:"50%"}}>
       <img src={shoes.image}/>
       <h5>{shoes.brand}</h5>
       <h6>${shoes.price}</h6>
       </div>

      </div>)}


      </div>
    );
  }
}
