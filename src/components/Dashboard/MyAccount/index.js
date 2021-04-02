import React from "react";
import "./MyAccount.scss";
import levelIcon from "../../../assets/images/HomePage/level-icon.png";
import { SelectBox } from "../../../components";
import { getMyAccountInfo } from '../../../store/actions/coreActions';
import Helper from '../../../utils/Helper';

export default class MyAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            gender: '',
            email: '',
            phone: '',
            password: '',
            restaurant_name: '',
            restaurant_city: '',
            restaurant_street: '',
            restaurant_phone: '',
        };
    };

    componentDidMount(){
        Helper.showSpinner();

        getMyAccountInfo().then(res => {
            Helper.hideSpinner();

            this.setState({
                name: res.name,
                gender: res.gender,
                email: res.email,
                phone: res.phone,
                password: res.password,
            });
        })
        .catch(err => {
            Helper.hideSpinner();
            console.log("get my account error:", err);
        });
    };

    selectRestaurant = (val) => {
        this.setState({
            restaurant_name: val.name,
            restaurant_city: val.city,
            restaurant_city: val.street,
            restaurant_phone: val.phone,
        })
    };

    render() {
        const { name, gender, email, phone, password, restaurant_name, restaurant_city, restaurant_street, restaurant_phone } = this.state;
        const { restaurantList } = this.props;
        console.log("====restaurantList====", restaurantList)
        return (
            <div className="account-component">
                <div className="account-container">
                    <div className="account-sub-header">
                        <h2>Informazioni personali</h2>
                    </div>
                    <div className="main-row">
                        <div className="row">
                            <div className="col-lg-6 input-item">
                                <h3>NOME</h3>
                                <input
                                    type="text" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    value={name}
                                    onChange={(e) => { this.setState({ name: e.target.value }) }} 
                                />
                            </div>
                            <div className="col-lg-6 input-item">
                                <h3>COGNOME</h3>
                                <input
                                    type="text" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    value={gender}
                                    onChange={(e) => { this.setState({ gender: e.target.value }) }} 
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 input-item">
                                <h3>E-MAIL</h3>
                                <input
                                    type="email" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    value={email}
                                    onChange={(e) => { this.setState({ email: e.target.value }) }} 
                                />
                            </div>
                            <div className="col-lg-6 input-item">
                                <h3>COGNOME</h3>
                                <input
                                    type="number" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    value={phone}
                                    onChange={(e) => { this.setState({ phone: e.target.value }) }} 
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 input-item">
                                <h3>PASSWORD</h3>
                                <input
                                    type="password" 
                                    className="form-control"
                                    // placeholder="Nome"
                                    value={password}
                                    onChange={(e) => { this.setState({ password: e.target.value }) }} 
                                />
                            </div>
                            <div className="col-lg-6 input-item" />
                        </div>

                        <div className="reset-password">Clicca qui per richiedere la modifica della tua password</div>
                        
                        <div className="marketing-preferences">
                            <h3>Preferenze Di Marketing</h3>
                            <div className="marketing-content">
                                <div className="">
                                
                                </div>
                                <div className="">
                                    <p>Spunta questa casella se non desideri ricevere offerte e promozioni commerciali via email da Ichi Station. Potrai decidere in qualunque momento di non ricevere più tali comunicazioni e non divulgheremo mai i tuoi dati ad altre aziende</p>
                                </div>
                            </div>
                        </div>

                        <div className="account-sub-header">
                            <h2>Il mio ristorante preferito</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 input-item">
                                <h3>ristorante</h3>
                                <SelectBox 
                                    value={restaurant_name}
                                    options={restaurantList}
                                    onChange={val => this.selectRestaurant(val)}
                                />
                            </div>
                            <div className="col-lg-6 input-item location-area">
                                <div className="logo-area">
                                    <img src={levelIcon} alt="level-icon" className="level-icon"/>
                                    <div className="restaurant-name">{restaurant_name}</div>
                                </div>
                                <p>{restaurant_city}</p>
                                <p>Telefono per ordinazioni</p>
                                <p>{restaurant_phone}</p>
                            </div>
                        </div>                          
                    </div>
                </div>
            </div>
        );
    }
}
