import React from "react";
import "./RestaurantDetail.scss";
import levelIcon from "../../../assets/images/HomePage/level-icon.png";
import restaurant_header_img from "../../../assets/images/Restaurant/restaurant-header-img.png";
import {
    Row, Col 
} from 'react-bootstrap';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const RestaurantData = {
    restaurant_header_img,
    title: "Station Fara",
    address1: "Via Gustavo Fara, 33",
    address2: "20149 Milano (MI)",
    phone: "02 39288436",
    content1: "Il vostro ristorante giapponese Ichi Station di via Fara vi dà il benvenuto a mezzogiorno e sera per una ristorazione rapida sul posto o da asporto. Il nostro ristorante di sushi prepara dei menu sani ed equilibrati, adatti alle vostre richieste e al vostro stile di vita. Venite a scoprire il nostro sushi, maki e altre creazioni originali. Il nostro menu, ogni anno, si arricchisce di nuove portate che sono sinonimo di piacere e di scoperta del gusto.",
    content2: "Per ordinare il vostro menu e approfittare di una consegna express a domicilio, a Milano, non esitate a contattarci telefonicamente o tramite Internet. Le cucine chiudono tra i 15 e i 30 minuti prima della chiusura del ristorante. Il nostro ristorante sarà lieto di servirvi.",
}

export default class RestaurantDetail extends React.Component {
    render() {
        const { restaurantDetail } = this.props;
        return (
            <div className="restaurantDetail-component">
                <div className="container restaurantDetail-container">
                    <div className="restaurant-header">
                        <img src={restaurantDetail.img} alt="restaurant-img" className="restaurant-header-img"/>
                    </div>
                    <div className="restaurant-body">
                        <div className="title-area">
                            <div className="title">
                                <img src={levelIcon} alt="restaurant-img" className="level-icon"/>
                                <h2>{restaurantDetail.name}</h2>
                            </div>
                            <div className="open">
                                <button className=" btn open-btn">APERTO</button>
                            </div>
                        </div>
                        <div className="row address-phone-area">
                            <div className="col-lg-6 address-area">
                                <p>{restaurantDetail.street}</p>
                                {/* <p>{restaurantDetail.address2}</p> */}
                            </div>
                            <div className="col-lg-6  phone-area">
                                <p>Telefono per ordinazioni</p>
                                <p>{restaurantDetail.phone}</p>
                            </div>
                        </div>
                        <div className="">
                            <button className="btn btn-order">ORDINA IN QUESTO RISTORANTE</button>
                        </div>
                        <div className="map-wrapper">
                            <div className="map-container">
                                <Map
                                    google={this.props.google}
                                    zoom={8}
                                    style={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    initialCenter={{ lat: restaurantDetail.gps.lat, lng: restaurantDetail.gps.lng }}
                                >
                                    <Marker position={{ lat: restaurantDetail.gps.lat, lng: restaurantDetail.gps.lng }} />
                                </Map>
                            </div>
                        </div>
                        
                        <div className="tableHours">
                            <div className="row">
                                <div className="col-lg-2 col-sm-2">&nbsp;</div>
                                <div className="col-lg-5 col-sm-5">Pranzo</div>
                                <div className="col-lg-5 col-sm-5 first-row ">Cena</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-sm-2">Lunedì</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.mon.lunch}</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.mon.dinner}</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-sm-2">Martedì</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.tue.lunch}</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.tue.dinner}</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-sm-2">Merdivedì</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.wed.lunch}</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.wed.dinner}</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-sm-2">Giovedì</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.thu.lunch}</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.thu.dinner}</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-sm-2">Venerdì</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.fri.lunch}</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.fri.dinner}</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-sm-2">Sabato</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.sat.lunch}</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.sat.dinner}</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-sm-2">Domenica</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.sund.lunch}</div>
                                <div className="col-lg-5 col-sm-5">{restaurantDetail.open.sund.dinner}</div>
                            </div>
                        </div>                       

                        <div className="restaurant-txt">{restaurantDetail.content1}</div>
                        <div className="restaurant-txt">{restaurantDetail.content2}</div>                        
                    </div>
                </div>
            </div>
        );
    }
}
