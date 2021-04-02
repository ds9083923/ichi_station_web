import React from "react";
import "./MyAddress.scss";
import { getMyAddressInfo } from '../../../store/actions/coreActions';
import Helper from '../../../utils/Helper';

export default class MyAddress extends React.Component {

    constructor() {
        super();
        this.state = {
            address1: '',
            postalCode: '',
            floor: '',
            intercom: '',
            address2: '',
            riders: '',
            isHomeToggle: true,
            isNewAddressToggle: false,   
        };
    };

    componentDidMount(){
        Helper.showSpinner();

        getMyAddressInfo().then(res => {
            Helper.hideSpinner();
            if(res){
                this.setState({
                    address1: res.address.address1,
                    postalCode: res.address.postalCode,
                    floor: res.address.floor,
                    intercom: res.address.intercom,
                    address2: res.address.address2,
                    riders: res.address.riders,
                });
            };
        })
        .catch(err => {
            Helper.hideSpinner();
            console.log("get my address error:", err);
        });
    };

    render() {
        const { address1, postalCode, floor, intercom, address2, riders, isHomeToggle, isNewAddressToggle } = this.state;
        return (
            <div className="address-component">
                <div className="address-container">
                    <div className="address-sub-header">
                        <h2>I miei indirizzi salvati</h2>
                    </div>
                    <div className="main-row">
                        <div className="home-area">
                            <div className="toggle-area" onClick={()=>this.setState({isHomeToggle: !isHomeToggle})}>
                                <div className={isHomeToggle? 'dot' : 'undot'}/>
                            </div>
                            <h3>CASA</h3>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6 input-item">
                                <h3>INDIRIZZO E NUMERO CIVICO</h3>
                                <input
                                    type="text" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    disabled={true}
                                    value={address1}
                                    onChange={(e) => { this.setState({ address1: e.target.value }) }} 
                                />
                            </div>
                            <div className="col-lg-6 input-item">
                                <h3>CAP</h3>
                                <input
                                    type="number" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    disabled={true}
                                    value={postalCode}
                                    onChange={(e) => { this.setState({ postalCode: e.target.value }) }} 
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 input-item">
                                <h3>PIANO E INTERNO</h3>
                                <input
                                    type="text" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    disabled={true}
                                    value={floor}
                                    onChange={(e) => { this.setState({ floor: e.target.value }) }} 
                                />
                            </div>
                            <div className="col-lg-6 input-item">
                                <h3>CITOFONO</h3>
                                <input
                                    type="text" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    disabled={true}
                                    value={intercom}
                                    onChange={(e) => { this.setState({ intercom: e.target.value }) }} 
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 input-item">
                                <h3>NOME INDIRIZZO</h3>
                                <input
                                    type="text" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    disabled={true}
                                    value={address2}
                                    onChange={(e) => { this.setState({ address2: e.target.value }) }} 
                                />
                            </div>
                        </div>

                        <div className="riders-content">
                            <h3>ISTRUZIONI PER IL RIDERS</h3>
                            <textarea placeholder="ES. E la porta nera vicino al negozio di animali. Per favore chiama quando arrivi." value={riders} onChange= {(event)=>this.setState({riders : event.target.value})} />                            
                        </div>

                        <div className="new-address-area">
                            <div className="toggle-area" onClick={()=>this.setState({isNewAddressToggle: !isNewAddressToggle})}>
                                <div className={isNewAddressToggle? 'dot' : 'undot'}/>
                            </div>
                            <h3>AGGIUNGI NUOVO INDIRIZZO</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
