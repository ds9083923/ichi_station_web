import React from "react";
import "./StartArea.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { db,GoogleMapsAPI } from '../../../config/firebase';
import LocationInputSearch from '../../shared/LocationInputSearch';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import _ from 'underscore';
import { ReactSVG } from 'react-svg'
import scriptLoader from 'react-async-script-loader';
import {haversine_distance} from '../../../utils/commons';
import { getDistance } from 'geolib';
import Helper from '../../../utils/Helper';
import { getRestaurants } from '../../../store/actions/coreActions';
import levelIcon from "../../../assets/images/HomePage/level-icon.png";
import location_icon from "../../../assets/images/Icons/location_icon.svg";
import search_icon from "../../../assets/images/Icons/search-icon.svg";
import drow_arrow_icon from "../../../assets/images/Icons/drow-arrow-icon.svg";

Geocode.setApiKey( GoogleMapsAPI );
class StartArea extends React.Component {
    constructor( props ){
		super( props );
		this.state = {
			address: '',
			city: '',
			area: '',
      state: '',
      type_menu: false,
      type:'delivery',
			mapPosition: null,
			markerPosition: null,
      restaurants:[],
      restaurant_name: '',
      restaurant_street: '',
      isRestaurant_menu: false,
      isGmapLoaded:false,
      civico: '01',
      gps: ''
		}
  }
  
  componentDidMount(){
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${GoogleMapsAPI}`;
    script.async = true;
    document.body.appendChild(script);

    Helper.showSpinner();
    getRestaurants().then(res => {
      Helper.hideSpinner();
      this.setState({restaurants: res});
      this.setState({
        restaurants: res,
        restaurant_name: res[0].name,
        restaurant_street: res[0].street,
      });
      this.initMap()
    })
    .catch(err => {
        Helper.hideSpinner();            
        console.log("login error:", err);
    });
  };

  initMap (){
    if (this.state.ready) return;      
    let success=()=>{
      navigator.geolocation.getCurrentPosition((position)=> {
        console.log("Latitude is ::", position.coords.latitude);
        console.log("Longitude is ::", position.coords.longitude);
        this.setState({gps:{lat:position.coords.latitude,lng:position.coords.longitude}, ready:true})

        var restaurants = [];
        this.state.restaurants.map((item, index)=> {
          var distance = getDistance(
            { latitude: position.coords.latitude, longitude: position.coords.longitude },
            { latitude: item.gps.lat, longitude: item.gps.lng }
          );

          restaurants[index] = {...item, distance};
        });
        this.setState({
          restaurants,
          restaurant_name: restaurants[0].name,
          restaurant_street: restaurants[0].street,
        });
        
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
    this.setState({isGmapLoaded: true});
  }

    // componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    //   if (isScriptLoaded && !this.props.isScriptLoaded) {
    //     // load finished
    //     if (isScriptLoadSucceed) {
    //         this.initMap();
    //     }
    //     else{
    //         alert("script not loaded")
    //     } ;
    //   };
    // };

    // componentDidUpdate(){
    //   if (this.state.type='delivery'&&this.state.restaurant==null&&this.state.restaurants){
    //     let minRestaurant = this.state.restaurants[0];
    //     minRestaurant['distance']= 3000;
    //     for (var i =0;i<this.state.restaurants;i++){
    //       const tempRestaurant = this.state.restaurants[i];
    //       tempRestaurant['distance']=  haversine_distance(this.state.markerPosition,tempRestaurant.gps);
    //       if (tempRestaurant['distance']<minRestaurant['distance']){
    //         minRestaurant = tempRestaurant;
    //       }
    //     }
    //     this.setState({restaurant:minRestaurant});

    //     console.log("=======restaturant==========", this.state.restaurant);
    //   }
    // };

    Change = ( event ) => {
      console.log("======name======", event.target.name, "=====value=====", event.target.value)
		  this.setState({ [event.target.name]: event.target.value });
    };

    changeType = (type) => {
      this.setState({
        type_menu : false,
        isRestaurant_menu: false,
        type
      });
    };
    
    selectRestaurant = (item) => {
      this.setState({
        isRestaurant_menu: false,
        restaurant_name: item.name,
        restaurant_street: item.street
      });
    };

    search = () => {
      const { type, restaurant_name, restaurant_street, address, civico } = this.state;
      if((type === 'delivery' && address) || (type === 'takeaway' && restaurant_name)){
        this.props.history.push({
          pathname: "/menu",
          order:{type, restaurant_name, restaurant_street, address, civico}
        });
      };
    };

    getAddress = () => {
      Helper.showSpinner();
      const {gps} = this.state;
      if(gps) {
        Geocode.fromLatLng(gps.lat, gps.lng).then(
          (response) => {
            Helper.hideSpinner();
            const address = response.results[0].formatted_address;
            console.log("===address===", address);
            this.setState({address});
          },
          (error) => {
            console.error(error);
            Helper.hideSpinner();
          }
        );
      }
    };
 
    render() {
      const { type, type_menu, restaurants, address, civico, restaurant_name, restaurant_street, isRestaurant_menu } = this.state;
        return (
            <div className="startArea-component">
                <div className="container startArea-container">
                    <div className="main-row">
                        <h2>Sushi da asporto stellato</h2>
                        <h5>BY HARUO ICHICAWA </h5>
                        <div className="row main-body">
                            <div className="col-lg-4 left-area">
                                <div className="left-area-container">
                                    <h5>SONO INTERESSATO AL </h5>
                                    <div className="type-menu-area" onClick={()=> this.setState({type_menu: !type_menu})}>
                                      <div className="type-name" >{type === 'delivery'? 'Delivery' : 'Take away'}</div>
                                        <ReactSVG src={drow_arrow_icon}/>
                                    </div>
                                </div>
                                {type_menu && <div className="type-drop-down-list">
                                  <div className="type-name type-item" onClick={()=>this.changeType('delivery')}>Delivery</div>
                                  <div className="type-name type-item"onClick={()=>this.changeType('takeaway')}>Take away</div>
                                </div>}
                            </div>
                            <div className="col-lg-8 right-area">
                                <div className="right-area-container">
                                    <div className="input-area">                                        
                                        {type==='delivery' &&<h5  style={{ marginTop: '6px'}} >CONSEGNA IN </h5>}
                                        {type==='takeaway' &&<h5 style={{ marginTop: '15px',marginBottom: '5px'}}>RITIRO IN </h5>}
                                        {type==='delivery' &&this.state.isGmapLoaded&& 
                                          <LocationInputSearch 
                                            className="input"  
                                            address={this.state.address} 
                                            gps={this.state.markerPosition} 
                                            apikey={this.props.google} 
                                            onSelectAddress={(latLng, address)=> this.setState({markerPosition:latLng, mapPosition:latLng, address:address})}  
                                            placeholder="Inserisci l’indirizzo di consegna" name="address" 
                                          />
                                        }
                                        {type==='takeaway'&&
                                            <div className="select-restaurant" onClick={()=>this.setState({isRestaurant_menu: !isRestaurant_menu})}>
                                              <div className="restaurant-name">{`${restaurant_name}, `}</div>
                                              <div className="restaurant-street">{restaurant_street}</div>
                                            </div>
                                          // <select name="restaurant" onChange={this.Change}>                                            
                                          //   {
                                          //     restaurants.sort((a, b) => a.distance > b.distance ? 1:-1).map(
                                          //       (item, index) => <option value={item.street} key={index}>{`${item.name}, ${item.street}`}</option>
                                          //   )}
                                          // </select>
                                        }
                                    </div>

                                    {(!address || type==='takeaway') &&
                                      <div className="ml-3 mr-3 location-icon" onClick={()=>this.getAddress()}>
                                          <ReactSVG src={location_icon}/>
                                      </div>
                                    }
                                    {address && type==='delivery' &&
                                      <div className="ml-3">
                                        <h5  style={{ marginTop: '6px'}} >CIVICO</h5>
                                        <input
                                          type="number" 
                                          className="civico-input"                                        
                                          value={civico}
                                          onChange={(e) => { this.setState({ civico: e.target.value }) }} 
                                        />
                                      </div>
                                    }
                                    <div onClick={()=>this.search()} className="serch-icon">
                                      <ReactSVG src={search_icon}/>
                                    </div>                                    
                                </div>
                                <div className="drop-down-list">
                                  {isRestaurant_menu && restaurants.map((item, index)=> (
                                    <div className="list-item" key={index} onClick={()=>this.selectRestaurant(item)}>
                                      <img src={levelIcon} alt="level-icon" className="level-icon"/>                                      
                                      <div className="restaurant-name">{item.name}</div>
                                      <div className="restaurant-street">{`, ${item.street}`}</div>
                                    </div>
                                  ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(
  withRouter(StartArea)
);