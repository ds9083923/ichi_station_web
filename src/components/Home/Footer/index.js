import React from "react";
import "./Footer.scss";
import logo from "../../../assets/images/HomePage/logo.png";
import facebook_icon from "../../../assets/images/HomePage/facebook-icon.png";
import instagram_icon from "../../../assets/images/HomePage/instagram-icon.png";
import play_store_icon from "../../../assets/images/HomePage/play-store-icon.png";
import apple_store_icon from "../../../assets/images/HomePage/apple-store-icon.png";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-component">
                <div className="container footer-container">
                    <div className="row main-row">
                        <div className="col-lg-2">
                            <img src={logo} alt="logo" className="logo"/>
                        </div>
                        <div className="col-lg-2">
                            <div className="title">Ichi Station</div>
                            <div className="description">I nostri ristoranti</div>
                            <div className="description">Servizio Clienti</div>
                            <div className="description">Menu</div>
                            <div className="description">Note legali</div>
                        </div>
                        <div className="col-lg-3 pr-5">
                            <div className="title">Ichi Station</div>
                            <div className="description">
                                Hai domande riguardo un ordine precedente, i nostri prodotti o i nostri servizi?
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="title">Scarica la nostra App</div>
                            <div className="description">
                                Scarica la nostra nuovissima app
                                e ordina comodamente dal tuo smartphone
                            </div>
                            <div className="title mt-4">DOWNLOAD</div>
                            <div className="app-store-icons">
                                <div className="">
                                    <img src={apple_store_icon} alt="apple-store-icon" className="facebook-icon"/>
                                </div>
                                <div className="ml-5">
                                    <img src={play_store_icon} alt="play-store-icon" className="instagram-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="title">Seguici su</div>
                            <div className="social-icons">
                                <img src={facebook_icon} alt="facebook-icon" className="facebook-icon"/>
                                <img src={instagram_icon} alt="instagram-icon" className="instagram-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
