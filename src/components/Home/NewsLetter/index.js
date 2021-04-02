import React from "react";
import "./NewsLetter.scss";
import levelIcon from "../../../assets/images/HomePage/level-icon.png";


export default class NewsLetter extends React.Component {

    constructor() {
        super();
        this.state = {
            policy_check: false,
            email: "",
        };
    };

    policyCheck = () => {
        const { policy_check } = this.state;
        this.setState({policy_check: !policy_check});
    };

    render() {
        const { policy_check, email } = this.state;

        return (
            <div className="newsLetter-component">
                <div className="container newsLetter-container">
                    <div className="newsLetter-header">
                        <img src={levelIcon} alt="level-icon" className="level-icon"/>
                        <h2>Iscriviti alla nostra newsletter</h2>
                    </div>
                    <div className="main-row">
                        <div className="subscribe-container">
                            <input className="email-input"
                                placeholder="Inserisci il tuo indirizzo E-mail"
                                value={email}
                                onChange= {(event)=>this.setState({email: event.target.value})}
                            />
                            <div className="subscribe-btn">ISCRIVITI</div>
                        </div>
                        <div className="policy-container">
                            <div className="policy-btn" onClick={(e) => this.policyCheck()}>
                                <div className={`policy-point ${policy_check ?  "policy-check" : "policy-unCheck"}`}/>
                            </div>
                            <div className="policy-txt">Privacy policy</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
