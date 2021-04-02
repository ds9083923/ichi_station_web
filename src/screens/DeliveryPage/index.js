import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import { connect } from "react-redux";
import {
    Row, Col, Container, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'react-bootstrap';
import "./DeliveryPage.scss";
 

class DeliveryPage extends Component {
    constructor() {
        super();
        this.state = {

        }

        this.search = this.search.bind(this);
    }
    componentDidMount(){ 
        $("body").addClass("modal-open");
        $("header").addClass("dialog");
    };
    
    componentWillUnmount(){
        $("body").removeClass("modal-open");
        $("header").removeClass("dialog");
    };

    search() {

    }

    changeTime = () => {
        this.props.history.push(`/user/menu/delivery/time`);
    };

    render() {
        
        return (
            <div className="delivery-component"> 
                <div className="delivery-container">
                    <h2 className="delivery-takeaway">DELIVERY O TAKE AWAY</h2>
                    <div className="delivery-takeaway">

                        <Row >
                            <Col>

                            </Col>
                            <Col>
                                <svg width="74" height="72" viewBox="0 0 74 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.63125 60.6348C8.63125 62.0449 8.2289 63.125 7.42422 63.875C6.62344 64.625 5.46523 65 3.94961 65H1.52383V56.4336H4.21328C5.61172 56.4336 6.69765 56.8027 7.47109 57.541C8.24453 58.2793 8.63125 59.3105 8.63125 60.6348ZM6.74453 60.6816C6.74453 58.8418 5.93203 57.9219 4.30703 57.9219H3.34023V63.5H4.11953C5.86953 63.5 6.74453 62.5605 6.74453 60.6816ZM17.7402 65H12.8066V56.4336H17.7402V57.9219H14.623V59.8027H17.5234V61.291H14.623V63.5H17.7402V65ZM21.9332 65V56.4336H23.7496V63.5H27.2242V65H21.9332ZM31.1184 65V56.4336H32.9348V65H31.1184ZM42.3777 56.4336H44.2117L41.2996 65H39.3191L36.4129 56.4336H38.2469L39.8582 61.5312C39.948 61.832 40.0398 62.1836 40.1336 62.5859C40.2312 62.9844 40.2918 63.2617 40.3152 63.418C40.3582 63.0586 40.5047 62.4297 40.7547 61.5312L42.3777 56.4336ZM52.6293 65H47.6957V56.4336H52.6293V57.9219H49.5121V59.8027H52.4125V61.291H49.5121V63.5H52.6293V65ZM58.6387 60.2363H59.2246C59.7988 60.2363 60.2227 60.1406 60.4961 59.9492C60.7695 59.7578 60.9062 59.457 60.9062 59.0469C60.9062 58.6406 60.7656 58.3516 60.4844 58.1797C60.207 58.0078 59.7754 57.9219 59.1895 57.9219H58.6387V60.2363ZM58.6387 61.7129V65H56.8223V56.4336H59.3184C60.4824 56.4336 61.3438 56.6465 61.9023 57.0723C62.4609 57.4941 62.7402 58.1367 62.7402 59C62.7402 59.5039 62.6016 59.9531 62.3242 60.3477C62.0469 60.7383 61.6543 61.0449 61.1465 61.2676C62.4355 63.1934 63.2754 64.4375 63.666 65H61.6504L59.6055 61.7129H58.6387ZM69.8102 59.9609L71.5973 56.4336H73.5543L70.7125 61.666V65H68.9078V61.7246L66.066 56.4336H68.0348L69.8102 59.9609Z" fill="#3C5896"/>
                                    <circle cx="37" cy="20" r="19.5" stroke="#FF8C91"/>
                                    <rect x="24.5" y="11.5" width="8" height="7" stroke="#3C5896" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M45.5 12C45.5 11.7239 45.2761 11.5 45 11.5H42C41.1716 11.5 40.5 12.1716 40.5 13C40.5 13.8284 41.1716 14.5 42 14.5H45C45.2761 14.5 45.5 14.2761 45.5 14V12Z" stroke="#3C5896" stroke-linecap="round" stroke-linejoin="round"/>
                                    <line x1="38.5" y1="13" x2="40.5" y2="13" stroke="#3C5896" stroke-linecap="round"/>
                                    <line x1="35.5" y1="25.5" x2="43.5" y2="25.5" stroke="#3C5896" stroke-linecap="round"/>
                                    <line x1="24.5" y1="13.5" x2="32.5" y2="13.5" stroke="#3C5896" stroke-linecap="round"/>
                                    <circle cx="31.5" cy="25.5" r="3" stroke="#3C5896"/>
                                    <circle cx="45.5" cy="25.5" r="3" stroke="#3C5896"/>
                                    <path d="M25.5 25C25.5 25.2761 25.7239 25.5 26 25.5H36C36.2761 25.5 36.5 25.2761 36.5 25V20C36.5 19.1716 35.8284 18.5 35 18.5H32C28.4101 18.5 25.5 21.4101 25.5 25Z" fill="white" stroke="#3C5896" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M50 25.5C50.2761 25.5 50.5 25.2761 50.5 25V24.5C50.5 22.2909 48.7091 20.5 46.5 20.5C44.2909 20.5 42.5 22.2909 42.5 24.5V25C42.5 25.2761 42.7239 25.5 43 25.5H50Z" fill="white" stroke="#3C5896" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M44.4903 14.9019C44.4435 14.6682 44.2383 14.5 44 14.5L42 14.5C41.8674 14.5 41.7402 14.5527 41.6464 14.6464C41.5527 14.7402 41.5 14.8674 41.5 15L41.5 25C41.5 25.2761 41.7239 25.5 42 25.5L42.3406 25.5C44.5493 25.5 46.2058 23.4794 45.7726 21.3136L44.4903 14.9019Z" fill="white" stroke="#3C5896" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Col>
                            <Col>
                                <svg width="1" height="72" viewBox="0 0 1 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.5" y1="72" x2="0.500003" y2="-2.18557e-08" stroke="#BDBDBD" stroke-dasharray="1 1"/>
                                </svg>
                            </Col>
                            <Col>
                                <Link to="/user/menu/takeaway">
                                    <svg width="88" height="72" viewBox="0 0 88 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99961 65H5.00352V57.3184H2.29063V56.4336H8.7125V57.3184H5.99961V65ZM17.7922 65L16.7258 62.2754H13.2922L12.2375 65H11.2297L14.6164 56.3984H15.4543L18.8234 65H17.7922ZM16.4152 61.3789L15.4191 58.7246C15.2902 58.3887 15.1574 57.9766 15.0207 57.4883C14.9348 57.8633 14.8117 58.2754 14.6516 58.7246L13.6438 61.3789H16.4152ZM28.5887 65H27.4168L24.2938 60.8457L23.3973 61.6426V65H22.4012V56.4336H23.3973V60.6816L27.282 56.4336H28.4598L25.0145 60.1543L28.5887 65ZM36.9477 65H32.1723V56.4336H36.9477V57.3184H33.1684V60.0781H36.7191V60.957H33.1684V64.1094H36.9477V65ZM52.1539 65L51.0875 62.2754H47.6539L46.5992 65H45.5914L48.9781 56.3984H49.816L53.1852 65H52.1539ZM50.777 61.3789L49.7809 58.7246C49.652 58.3887 49.5191 57.9766 49.3824 57.4883C49.2965 57.8633 49.1734 58.2754 49.0133 58.7246L48.0055 61.3789H50.777ZM64.2395 65H63.2551L61.5266 59.2637C61.4445 59.0098 61.3527 58.6895 61.2512 58.3027C61.1496 57.916 61.0969 57.6836 61.093 57.6055C61.007 58.1211 60.8703 58.6855 60.6828 59.2988L59.007 65H58.0227L55.7434 56.4336H56.798L58.1516 61.7246C58.3391 62.4668 58.4758 63.1387 58.5617 63.7402C58.6672 63.0254 58.8234 62.3262 59.0305 61.6426L60.5656 56.4336H61.6203L63.2316 61.6895C63.4191 62.2949 63.5773 62.9785 63.7063 63.7402C63.7805 63.1855 63.9211 62.5098 64.1281 61.7129L65.4758 56.4336H66.5305L64.2395 65ZM75.657 65L74.5906 62.2754H71.157L70.1023 65H69.0945L72.4813 56.3984H73.3191L76.6883 65H75.657ZM74.2801 61.3789L73.284 58.7246C73.1551 58.3887 73.0223 57.9766 72.8856 57.4883C72.7996 57.8633 72.6766 58.2754 72.5164 58.7246L71.5086 61.3789H74.2801ZM82.4457 60.7168L84.7309 56.4336H85.809L82.9496 61.6777V65H81.9418V61.7246L79.0883 56.4336H80.1781L82.4457 60.7168Z" fill="#BDBDBD"/>
                                        <circle cx="44" cy="20" r="19.5" stroke="#BDBDBD"/>
                                        <path d="M47 21.6272L46.6182 20.494L44.5616 21.2905V19H43.9999H43.4382V21.2905L41.3815 20.494L41 21.6272L43.0954 22.3509L41.7903 24.2749L42.7622 25L43.9999 23.0015L45.2376 25L46.2094 24.2749L44.9045 22.3509L47 21.6272Z" fill="#BDBDBD"/>
                                        <path d="M36.5623 29.5L38.4446 13.5H49.5554L51.4377 29.5H36.5623Z" stroke="#BDBDBD"/>
                                        <path d="M47 12C47 10.3431 45.6569 9 44 9C42.3431 9 41 10.3431 41 12" stroke="#BDBDBD"/>
                                        <line x1="41" y1="12" x2="41" y2="16" stroke="#BDBDBD"/>
                                        <line x1="47" y1="12" x2="47" y2="16" stroke="#BDBDBD"/>
                                    </svg>
                                </Link>
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={9}>
                                <div>
                                    <h5 className="title">Indirizzo di consegna</h5>
                                        <h5>Via Filippo Turati 4 (MI)</h5>

                                </div>
                            </Col>
                            <Col>
                                <Link to="/user/menu/delivery/map" className="btn btn-ichistation inverted">CAMBIA</Link> 
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={9}>
                            <div>
                                <h5 className="title">Orario di consegna</h5>
                                <h5>Oggi a cena tra le 19:00/20:00</h5>

                            </div>
                            </Col>
                            <Col>
                                <button className="btn btn-ichistation inverted" onClick={()=>this.changeTime()}>CAMBIA</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col> 
                                <Link to="/menu" className="btn btn-ichistation confirm"  >CONFERMA</Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(withRouter(DeliveryPage));
