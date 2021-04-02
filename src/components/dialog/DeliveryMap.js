// Now export the above Map component into another component by passing the props values
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery'; 
 
import {
    Row, Col, Container, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'react-bootstrap';
 
import Map  from '../Map';
 
export default class  DeliveryMap extends Component {
  constructor(props) {
    super(props);
    
    this.state = {  
      gps:{lat:45.4646927, lng: 9.1889986},
      ready:true
    };
  }
 
  componentDidMount() {
    $("body").addClass("modal-open");
    $("header").addClass("dialog");
    this.initMap();  
  
  }

  initMap (){
    if (this.state.ready) return;
    let success=()=>{
      navigator.geolocation.getCurrentPosition((position)=> {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        this.setState({gps:{lat:position.coords.latitude,lng:position.coords.longitude},ready:true})
      });
    }
    const options ={};
    let errors=(e)=>{
      console.log(e);
    }
     if ( navigator.permissions && navigator.permissions.query) {
      
        navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });

      } 
      else if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(success);
       
      } else {
        alert("Sorry Not available!");
      }
  }
  componentDidUpdate(){
    this.initMap(); 
  }
  componentWillUnmount(){
    $("body").removeClass("modal-open");

    $("header").removeClass("dialog");
}
    render() {
       
      return(
        <div className="dialog-content"> <div >
        <div style={{minWidth:'100vw',paddingTop:'120px'}}>
          
          {this.state.ready && <Map
            google={this.props.google}
            center={this.state.gps} 
            height='calc(100vh - 200px)'

            zoom={18}
          />}

        </div></div>
         
      </div>
        )
    }
  }
