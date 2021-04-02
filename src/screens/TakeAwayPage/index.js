import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import  '../../components/dialog/dialog.scss';
import  './TakeAwayPage.scss';
import { connect } from "react-redux"; 
import $ from 'jquery';
 
import {
    Row, Col, Container, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'react-bootstrap';

class TakeAwayPage extends Component {
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

    };

    changeTime = () => {
        this.props.history.push(`/user/menu/delivery/time`);
    };

    render() {
        
        return (
            <div className="takeAway-component"> 
                <div className="takeAway-container">
                    <h2 className="delivery-takeaway">DELIVERY O TAKE AWAY</h2>
                    <div className="delivery-takeaway"> 
                        <Row >
                            <Col></Col>
                            <Col> 
                                <Link to="/user/menu/delivery">
                                    <svg width="74" height="72" viewBox="0 0 74 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.1195 60.6348C10.1195 62.0488 9.73476 63.1309 8.96523 63.8809C8.19961 64.627 7.09609 65 5.65469 65H3.28164V56.4336H5.90664C7.23867 56.4336 8.27383 56.8027 9.01211 57.541C9.75039 58.2793 10.1195 59.3105 10.1195 60.6348ZM9.06484 60.6699C9.06484 59.5527 8.78359 58.7109 8.22109 58.1445C7.6625 57.5781 6.83047 57.2949 5.725 57.2949H4.27773V64.1387H5.49062C6.67812 64.1387 7.5707 63.8477 8.16836 63.2656C8.76601 62.6797 9.06484 61.8145 9.06484 60.6699ZM19.2109 65H14.4355V56.4336H19.2109V57.3184H15.4316V60.0781H18.9824V60.957H15.4316V64.1094H19.2109V65ZM23.5152 65V56.4336H24.5113V64.0977H28.2906V65H23.5152ZM32.1496 65V56.4336H33.1457V65H32.1496ZM42.7937 56.4336H43.866L40.7781 65H39.7937L36.7234 56.4336H37.7781L39.7469 61.9766C39.9734 62.6133 40.1531 63.2324 40.2859 63.834C40.4266 63.2012 40.6102 62.5703 40.8367 61.9414L42.7937 56.4336ZM52.225 65H47.4496V56.4336H52.225V57.3184H48.4457V60.0781H51.9965V60.957H48.4457V64.1094H52.225V65ZM57.5254 61.4375V65H56.5293V56.4336H58.8789C59.9297 56.4336 60.7051 56.6348 61.2051 57.0371C61.709 57.4395 61.9609 58.0449 61.9609 58.8535C61.9609 59.9863 61.3867 60.752 60.2383 61.1504L62.5645 65H61.3867L59.3125 61.4375H57.5254ZM57.5254 60.582H58.8906C59.5938 60.582 60.1094 60.4434 60.4375 60.166C60.7656 59.8848 60.9297 59.4648 60.9297 58.9062C60.9297 58.3398 60.7617 57.9316 60.4258 57.6816C60.0938 57.4316 59.5586 57.3066 58.8203 57.3066H57.5254V60.582ZM68.5269 60.7168L70.8121 56.4336H71.8902L69.0309 61.6777V65H68.023V61.7246L65.1695 56.4336H66.2594L68.5269 60.7168Z" fill="#BDBDBD"/>
                                        <circle cx="37" cy="20" r="19.5" stroke="#BDBDBD"/>
                                        <rect x="24.5" y="11.5" width="8" height="7" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M45.5 12C45.5 11.7239 45.2761 11.5 45 11.5H42C41.1716 11.5 40.5 12.1716 40.5 13C40.5 13.8284 41.1716 14.5 42 14.5H45C45.2761 14.5 45.5 14.2761 45.5 14V12Z" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
                                        <line x1="38.5" y1="13" x2="40.5" y2="13" stroke="#BDBDBD" stroke-linecap="round"/>
                                        <line x1="35.5" y1="25.5" x2="43.5" y2="25.5" stroke="#BDBDBD" stroke-linecap="round"/>
                                        <line x1="24.5" y1="13.5" x2="32.5" y2="13.5" stroke="#BDBDBD" stroke-linecap="round"/>
                                        <circle cx="31.5" cy="25.5" r="3" stroke="#BDBDBD"/>
                                        <circle cx="45.5" cy="25.5" r="3" stroke="#BDBDBD"/>
                                        <path d="M25.5 25C25.5 25.2761 25.7239 25.5 26 25.5H36C36.2761 25.5 36.5 25.2761 36.5 25V20C36.5 19.1716 35.8284 18.5 35 18.5H32C28.4101 18.5 25.5 21.4101 25.5 25Z" fill="white" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M50 25.5C50.2761 25.5 50.5 25.2761 50.5 25V24.5C50.5 22.2909 48.7091 20.5 46.5 20.5C44.2909 20.5 42.5 22.2909 42.5 24.5V25C42.5 25.2761 42.7239 25.5 43 25.5H50Z" fill="white" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M44.4903 14.9019C44.4435 14.6682 44.2383 14.5 44 14.5L42 14.5C41.8674 14.5 41.7402 14.5527 41.6464 14.6464C41.5527 14.7402 41.5 14.8674 41.5 15L41.5 25C41.5 25.2761 41.7239 25.5 42 25.5L42.3406 25.5C44.5493 25.5 46.2058 23.4794 45.7726 21.3136L44.4903 14.9019Z" fill="white" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </Link>

                            </Col>
                            <Col>
                                <svg width="1" height="72" viewBox="0 0 1 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.5" y1="72" x2="0.500003" y2="-2.18557e-08" stroke="#BDBDBD" stroke-dasharray="1 1"/>
                                </svg>

                            </Col>
                            <Col> 
                                <svg width="88" height="72" viewBox="0 0 88 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.4293 65H2.61289V57.9453H0.28672V56.4336H6.75547V57.9453H4.4293V65ZM15.718 65L15.0969 62.9609H11.9738L11.3527 65H9.3957L12.4191 56.3984H14.6398L17.675 65H15.718ZM14.6633 61.4375C14.0891 59.5898 13.7648 58.5449 13.6906 58.3027C13.6203 58.0605 13.5695 57.8691 13.5383 57.7285C13.4094 58.2285 13.0402 59.4648 12.4309 61.4375H14.6633ZM28.0496 65H25.9871L23.743 61.3906L22.9754 61.9414V65H21.159V56.4336H22.9754V60.3535L23.6902 59.3457L26.0105 56.4336H28.0262L25.0379 60.2246L28.0496 65ZM36.4613 65H31.5277V56.4336H36.4613V57.9219H33.3441V59.8027H36.2445V61.291H33.3441V63.5H36.4613V65ZM51.4156 65L50.7945 62.9609H47.6715L47.0504 65H45.0934L48.1168 56.3984H50.3375L53.3727 65H51.4156ZM50.3609 61.4375C49.7867 59.5898 49.4625 58.5449 49.3883 58.3027C49.318 58.0605 49.2672 57.8691 49.2359 57.7285C49.107 58.2285 48.7379 59.4648 48.1285 61.4375H50.3609ZM65.2004 65H63.132L61.9719 60.5C61.9289 60.3398 61.8547 60.0098 61.7492 59.5098C61.6477 59.0059 61.5891 58.668 61.5734 58.4961C61.55 58.707 61.4914 59.0469 61.3977 59.5156C61.3039 59.9805 61.2316 60.3125 61.1809 60.5117L60.0266 65H57.9641L55.7785 56.4336H57.5656L58.6613 61.1094C58.8527 61.9727 58.9914 62.7207 59.0773 63.3535C59.1008 63.1309 59.1535 62.7871 59.2355 62.3223C59.3215 61.8535 59.4016 61.4902 59.4758 61.2324L60.7238 56.4336H62.4406L63.6887 61.2324C63.7434 61.4473 63.8117 61.7754 63.8938 62.2168C63.9758 62.6582 64.0383 63.0371 64.0813 63.3535C64.1203 63.0488 64.1828 62.6699 64.2688 62.2168C64.3547 61.7598 64.4328 61.3906 64.5031 61.1094L65.593 56.4336H67.3801L65.2004 65ZM76.1023 65L75.4813 62.9609H72.3582L71.7371 65H69.7801L72.8035 56.3984H75.0242L78.0594 65H76.1023ZM75.0477 61.4375C74.4734 59.5898 74.1492 58.5449 74.075 58.3027C74.0047 58.0605 73.9539 57.8691 73.9227 57.7285C73.7938 58.2285 73.4246 59.4648 72.8152 61.4375H75.0477ZM84.2094 59.9609L85.9965 56.4336H87.9535L85.1117 61.666V65H83.307V61.7246L80.4652 56.4336H82.434L84.2094 59.9609Z" fill="#3C5896"/>
                                    <circle cx="44" cy="20" r="19.5" stroke="#FF8C91"/>
                                    <path d="M47 21.6272L46.6182 20.494L44.5616 21.2905V19H43.9999H43.4382V21.2905L41.3815 20.494L41 21.6272L43.0954 22.3509L41.7903 24.2749L42.7622 25L43.9999 23.0015L45.2376 25L46.2094 24.2749L44.9045 22.3509L47 21.6272Z" fill="#3C5896"/>
                                    <path d="M36.5623 29.5L38.4446 13.5H49.5554L51.4377 29.5H36.5623Z" stroke="#3C5896"/>
                                    <path d="M47 12C47 10.3431 45.6569 9 44 9C42.3431 9 41 10.3431 41 12" stroke="#3C5896"/>
                                    <line x1="41" y1="12" x2="41" y2="16" stroke="#3C5896"/>
                                    <line x1="47" y1="12" x2="47" y2="16" stroke="#3C5896"/>
                                </svg>

                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col xs={9}>
                                <div>
                                    <h5 className="title">Ristorante</h5>
                                    <h5>Viale Col di Lana, 3 (MI)</h5>
                                </div>
                            </Col>
                            <Col>
                                <button className="btn btn-ichistation inverted">CAMBIA</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={9}>
                                <div>
                                    <h5 className="title">Orario di ritiro</h5>
                                    <h5>Oggi a cena tra le 19:00/20:00</h5>

                                </div>
                                </Col><Col>
                                <button className="btn btn-ichistation inverted" onClick={()=>this.changeTime()}>CAMBIA</button>
                                </Col>
                        </Row>
                        <Row>
                            <Col> 
                                <Link to="/menu" className="btn btn-ichistation confirm" >CONFERMA</Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(withRouter(TakeAwayPage));
