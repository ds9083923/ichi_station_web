import React from 'react';
import { Modal } from 'react-bootstrap';
import close_icon from "../../assets/images/close-icon.png";
import logo from "../../assets/images/HomePage/logo.png";

import './DeliveryTimeModal.scss';

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

export default class DeliveryTimeModal extends React.Component {
    
    constructor() {
        super();
        this.state = {            
            day: 'Oggi',
            service: 'Adesso',
            time: '19:00 / 19:30'
        }
    }

    daySelect = (item) => {
        this.setState({day: item.value});
    };

    serviceSelect = (item) => {
        this.setState({service: item.value});
    };

    timeSelect = (item) => {
        this.setState({time: item.value});
    };

    confirm = (status) => {
        const { day, service, time } = this.state;

        var selected_time = `${day} ${service} ${time}`
        this.props.confirmTimeModal(status, selected_time);
    };

    render() {
        const {isDeliveryTimeModal} = this.props;
        const { day, service, time } = this.state;
        
        return (
            <Modal show={isDeliveryTimeModal} className="time-modal-component">
                <div className="time-modal-content">
                    <div className="modal-header">
                        <img src={logo} alt="logo" className="logo"/>
                        <img src={close_icon} alt="close-icon" className="close-icon" onClick={()=>this.confirm(false)}/>
                    </div>
                    
                    <div className="modal-body container">
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
                            <button className="btn btn-ichistation confirm-btn" onClick={()=>this.confirm(true)} >CONFERMA</button>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    };
};