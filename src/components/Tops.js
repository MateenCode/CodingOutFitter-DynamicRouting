import React, { Component } from 'react';
import data from '../data/data'
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


 export default class Tops extends Component {
   render() {
     return (

         <div className="Tops">
           {data[0].items.map((top) => <div className="col-sm-6" key={data[0].name}>


            <h5>{top.name}</h5>
              <div className="w3-card-4" style={{width:"50%"}}>
            <img src={top.image}/>
            <h5>{top.brand}</h5>
            <h6>${top.price}</h6>
            </div>

           </div>)}
         </div>
     )
   }
 }
