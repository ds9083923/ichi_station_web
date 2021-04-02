import React from "react";
import "./FoodJourney.scss";
import levelIcon from "../../../assets/images/HomePage/level-icon.png";
import journey_img_1 from "../../../assets/images/HomePage/journey-img-1.png";
import journey_img_2 from "../../../assets/images/HomePage/journey-img-2.png";
import journey_img_3 from "../../../assets/images/HomePage/journey-img-3.png";
import journey_img_4 from "../../../assets/images/HomePage/journey-img-4.png";


export default class FoodJourney extends React.Component {
    render() {
        return (
        <div className="foodJourney-component">
            <div className="container foodJourney-container">
                <div className="journey-header">
                    <img src={levelIcon} alt="level-icon" className="level-icon"/>
                    <h2>Ichi Station. A Food Journey.</h2>
                    <p>
                        Il viaggio sono io.
                        Sempre uguale, mai nello stesso modo.
                        Io che cambio in ogni luogo,
                        io che cambio in ogni tempo.
                        Mi scopro in un sapore, mi esploro in un altro.
                        Il gusto di assaggiare definisce il mio viaggio.
                    </p>
                </div>
                <div className="row main-row">
                    <div className="col-lg-6 left-area">
                        <img src={journey_img_1} alt="journey-img" className="journey-img"/>
                        <img src={journey_img_2} alt="journey-img" className="journey-img"/>
                    </div>
                    <div className="col-lg-6 right-area">
                        <img src={journey_img_3} alt="journey-img" className="journey-img"/>
                        <img src={journey_img_4} alt="journey-img" className="journey-img"/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
