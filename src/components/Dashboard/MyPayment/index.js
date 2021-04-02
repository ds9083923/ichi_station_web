import React from "react";
import "./MyPayment.scss";

export default class MyPayment extends React.Component {

    constructor() {
        super();
        this.state = {
            card_number: '',
            deadline: '',
            cvv_number: '',
            isCard: true,   
            isPaypal: false,   
        };
    };

    render() {
        const { card_number, deadline, cvv_number, isCard, isPaypal } = this.state;
        return (
            <div className="payment-component">
                <div className="payment-container">
                    <div className="payment-sub-header">
                        <h2>I miei metodi di pagamento</h2>
                    </div>
                    <div className="main-row">
                        <div className="home-area">
                            <div className="toggle-area" onClick={()=>this.setState({isCard: !isCard})}>
                                <div className={isCard? 'dot' : 'undot'}/>
                            </div>
                            <h3>AGGIUNGI NUOVA CARTA DI PAGAMENTO</h3>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 input-item">
                                <h3>NOME CARTA</h3>
                                <input
                                    type="number" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    value={card_number}
                                    onChange={(e) => { this.setState({ card_number: e.target.value }) }} 
                                />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6 input-item">
                                <h3>SCAENZA</h3>
                                <input
                                    type="text" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    value={deadline}
                                    onChange={(e) => { this.setState({ deadline: e.target.value }) }} 
                                />
                            </div>
                            <div className="col-lg-6 input-item">
                                <h3>NUMERO CVV</h3>
                                <input
                                    type="number" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    value={cvv_number}
                                    onChange={(e) => { this.setState({ cvv_number: e.target.value }) }} 
                                />
                            </div>
                        </div>

                        <div className="new-payment-area">
                            <div className="toggle-area" onClick={()=>this.setState({isPaypal: !isPaypal})}>
                                <div className={isPaypal? 'dot' : 'undot'}/>
                            </div>
                            <h3>AGGIUNGI NUOVO INDIRIZZO</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
