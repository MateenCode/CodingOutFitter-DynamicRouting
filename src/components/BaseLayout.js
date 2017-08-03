import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';


class BaseLayout extends Component {
  render() {
    return (

  <div className="BaseLayout">

  <div className="w3-container">
    <h1>Coding OutFitters</h1>
  </div>

    <nav className="w3-bar w3-black">

      <NavLink to ='/' className="w3-bar-item w3-button" activeStyle={{color: "white"}}> Home </NavLink>
      <NavLink to ='/Tops' className="w3-bar-item w3-button" activeStyle={{color: "white"}} > Tops </NavLink>
      <NavLink to ='/Bottoms' className="w3-bar-item w3-button" activeStyle={{color: "white"}} > Bottoms </NavLink>
      <NavLink to ='/Shoes' className="w3-bar-item w3-button" activeStyle={{color: "white"}}> Shoes </NavLink>

    </nav>


  {this.props.children}

  </div>

    );
  }
}

export default BaseLayout;
