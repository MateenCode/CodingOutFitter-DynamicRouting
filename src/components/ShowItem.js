import React, { Component } from 'react';
import data from '../data/data'
import {Link} from 'react-router-dom';
import '../styles/App.css';



 export default class ShowItem extends Component {

   constructor(props) {
      super(props)
      this.state = {
        image:'',
        name: '',
        brand: '',
        price: ''
}

  this.setState({

    image: data.image,
    name: data.name,
    brand: data.brand,
    price: data.price

});
}



   render() {
     return (

       <div className="Tops">

          <h5>{this.state.name}</h5>
          <div className="w3-card-4" style={{width:"50%"}}>
          <img src={this.state.image}/>
          <h5>{this.state.brand}</h5>
          <h6>${this.state.price}</h6>
          </div>



       </div>
     )
   }
}
