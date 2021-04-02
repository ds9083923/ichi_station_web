import React from "react";
import "./Quality.scss";

import quality_icon from "../../../assets/images/HomePage/quality-icon.png";
import credit_card_icon from "../../../assets/images/HomePage/credit-card-icon.png";
import in_delivery_icon from "../../../assets/images/HomePage/in-delivery-icon.png";

export default class Quality extends React.Component {
    render() {
        return (
            <div className="quality-component">
                <div className="container quality-container">
                    <div className="row main-row">
                        <div className="col-lg-4 item">
                            <img src={quality_icon} alt="quality-icon" />
                            <div className="description">altissima qualità</div>
                        </div>
                        <div className="col-lg-4 item">
                            <img src={credit_card_icon} alt="card-icon" />
                            <div className="description">pagamento 100% sicuro</div>
                        </div>
                        <div className="col-lg-4 item">
                            <img src={in_delivery_icon} alt="inTime-icon" />
                            <div className="description">consegna in 30’ minuti</div>
                        </div>
                    </div>
                    <div className="border-container-left"/>
                    <div className="border-container-right"/>
                </div>
            </div>
        );
    }
}
