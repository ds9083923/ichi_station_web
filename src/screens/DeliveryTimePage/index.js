import React, { Component } from "react";
import { Link } from 'react-router-dom';
import  '../../components/dialog/dialog.scss';
import  './DeliveryTimePage.scss'; 
import $ from 'jquery';

const Days =[
    {id: 1, value: 'Oggi'},
    {id: 2, value: 'Domani'}
]

const Services =[
    {id: 1, value: 'Adesso'},
    {id: 2, value: 'Pranzo'},
    {id: 3, value: 'Cena'},
]

const Times =[
    {id: 1, value: '19:00 / 19:30'},
    {id: 2, value: '19:15 / 19:45'},
    {id: 3, value: '19:30 / 20:00'},
    {id: 4, value: '19:45 / 20:15'},
    {id: 5, value: '20:00 / 20:30'},
]

class DeliveryTimePage extends Component {
    constructor() {
        super();
        this.state = {
            day: 'Oggi',
            service: 'Adesso',
            time: '19:00 / 19:30'
        }
    }

    componentDidMount(){ 
        $("body").addClass("modal-open");
        $("header").addClass("dialog");         
    };
    
    componentWillUnmount(){
        $("body").removeClass("modal-open");
        $("header").removeClass("dialog");
    };

    daySelect = (item) => {
        this.setState({day: item.value});
    };

    serviceSelect = (item) => {
        this.setState({service: item.value});
    };

    timeSelect = (item) => {
        this.setState({time: item.value});
    };

    render() {
        const { day, service, time } = this.state;
        return (
            <div className="deliveryTime-component"> 
                <div className="deliveryTime-container">
                    <h2 >ORARIO DI CONSEGNA</h2>
                    <div className="selected-time">{`${day} a ${service} tra le ${time}`}</div>

                    <div className="time-container"> 
                        <div className="row">
                            <div className="col-lg-4 item-container">
                                <div className="category-txt">Scegli il giorno</div>
                                <div className="list-area">
                                    {Days.map((item, index) => (
                                        <div className={`item ${day === item.value ? 'active' : 'inActive'}`} key={index} onClick={() =>this.daySelect(item)}>
                                            {item.value}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-lg-4 item-container">
                                <div className="category-txt">Scegli il servizio</div>
                                <div className="list-area">
                                    {Services.map((item, index) => (
                                        <div className={`item ${service === item.value ? 'active' : 'inActive'}`} key={index} onClick={() =>this.serviceSelect(item)}>
                                            {item.value}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-lg-4 item-container">
                                <div className="category-txt">Scegli I'orario</div>
                                <div className="list-area">
                                    {Times.map((item, index) => (
                                        <div className={`item ${time === item.value ? 'active' : 'inActive'}`} key={index} onClick={() =>this.timeSelect(item)}>
                                            {item.value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="confirm-btn-container">
                        <button className="btn btn-ichistation confirm-btn">CONFERMA</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeliveryTimePage;