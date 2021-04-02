import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import _, { rest } from 'underscore';
import { ReactSVG } from 'react-svg'
import {Row, Col, Container, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'react-bootstrap';
 import './stepbar.scss';
 import ThumbnailAddOn from '../ThumbnailAddOn';
import {db} from '../../config/firebase';
import './Cart.scss'
import Helper from '../../utils/Helper';
import { getProducts, deliveryProduct } from '../../store/actions/coreActions';
import remove_icon from "../../assets/images/Icons/remove_icon.svg";
import delivery_icon from "../../assets/images/delivery-icon.png";
import takeaway_icon from "../../assets/images/takeaway-icon.png";
import dropDonw_icon from "../../assets/images/drop-down-icon.png";
import { VenueNoteModal, DeliveryTimeModal } from "../../components";

import { SelectBox } from "../../components";

export default class Cart extends Component {
    constructor(props) {
        super(props);
        let products = new Array(0);

       
        let basketItems =(_.isUndefined(props.location.basketItems))?JSON.parse(localStorage.getItem("basketItems")):props.location.basketItems||[];
          
        this.state = {
            isVenueNoteModal: false,
            isDeliveryTimeModal: false,
            products:products,
            basketItems: basketItems,
            step :props.location.step||0,
            numbers: ( basketItems)?_.reduce(_.map(props.location.basketItems, (b) => b.number), (a, b) => a + b):0, 
            
            is_delivery: true,
            
            address1: '',
            delivery_time: '',
            floor: '',
            intercom: '',
            postalCode: '',
            phone: '',
            riders: '',
            
            isAddress1: true,
            isDeliveryTime: true,
            isFloor: true,
            isIntercom: true,
            isPostalCode: true,
            isPhone: true,
            isRiders: true,

            restaurant: '',
            takeaway_time: '',
            restaurant_userName: '',
            restaurant_userMobilePhone: '',
            restaurant_recommend: '',

            is_restaurant: true,
            is_takeaway_time: true,
            is_restaurant_userName: true,
            is_restaurant_userMobilePhone: true,
            is_restaurant_recommend: true,

            card_number: '',
            expire_date: '',
            cvv: '',

            is_card: true,
            agree_policy: false
        };
    }

    async componentDidMount(){
        $("body").addClass("modal-open");
        $("header").addClass("dialog");

        Helper.showSpinner();
        getProducts('add').then(res => {
            Helper.hideSpinner();           
            this.setState({products: res});                      
        })
        .catch(err => {
            Helper.hideSpinner();            
            console.log("get products error:", err);
        });
        this.setState({basketItems:JSON.parse(localStorage.getItem("basketItems"))});
    };
    
    componentWillUnmount(){
        $("body").removeClass("modal-open");
        $("header").removeClass("dialog");
    };    
  
    showModal() {
        this.setState({isOpen:true});
    };
    
    hideModal(){
        this.setState({isOpen:false});
    };

    before = () => {
        const { step } = this.state;
        if(step === 0) {
            this.props.history.push('/user/menu')
        } else {
            this.setState({step:step-1});
        };
    };

    next = () => {
        const { step } = this.state;

        if(step === 2) {
            this.orderDelivery();
        } else {
            this.setState({step:step + 1});
        };
    };

    handleSelectProduct = (product, operation) => {
        let basketItems = this.state.basketItems;
        console.log(operation);
        if (operation === 'del') {
            basketItems = _.filter(basketItems, (b) => { return (b.name !== product.name); });
        }
        if (operation === 'del1') {

            if (_.filter(basketItems, { name: product.name }).length > 0) {

                if (product.number > 1) {
                    basketItems.map((b) => {
                        if (b.name === product.name) {
                            b.number--;
                        } return b;
                    });
                } else {
                    basketItems = _.filter(basketItems, (b) => { return (b.name !== product.name); });
                };
            };
        };
        if (operation === 'add') {
            if (_.filter(basketItems, { name: product.name }).length > 0) {
                basketItems.map((b) => {
                    if (b.name === product.name) {
                        b.number++;
                    } return b;
                });
            }
            else {
                product.number = 1;
                basketItems.push(product);
            };
        };

        this.setState({ 
            product:null,
            basketItems: basketItems,
            numbers:_.reduce(_.map(basketItems, (b) => b.number), (a, b) => a + b) 
        });

        localStorage.setItem("basketItems", JSON.stringify(this.state.basketItems));
    };

    orderDelivery = () => {
        const { 
            is_delivery,
            basketItems, address1, delivery_time,  floor, intercom, postalCode, phone, riders,
            restaurant, takeaway_time, restaurant_userName, restaurant_userMobilePhone, restaurant_recommend,
        } = this.state;

        if(!_.isEmpty(basketItems)){
            var total_price = 0;
            basketItems.map((item, index)=> {
                total_price += item.price * item.number
            });            

            if (is_delivery) {

                if (address1) {
                    this.setState({ isAddress1: true });
                } else {
                    this.setState({ isAddress1: false });
                };
    
                if (delivery_time) {
                    this.setState({ isDeliveryTime: true });
                } else {
                    this.setState({ isDeliveryTime: false });
                };
    
                if (floor) {
                    this.setState({ isFloor: true });
                } else {
                    this.setState({ isFloor: false });
                };
    
                if (intercom) {
                    this.setState({ isIntercom: true });
                } else {
                    this.setState({ isIntercom: false });
                };
    
                if (postalCode) {
                    this.setState({ isPostalCode: true });
                } else {
                    this.setState({ isPostalCode: false });
                };
    
                if (phone) {
                    this.setState({ isPhone: true });
                } else {
                    this.setState({ isPhone: false });
                };
    
                if (riders) {
                    this.setState({ isRiders: true });
                } else {
                    this.setState({ isRiders: false });
                };

                if(address1 && delivery_time && floor && intercom && postalCode && phone && riders){
                    const { 
                        address1, delivery_time,  floor, intercom, postalCode, phone, riders
                     } = this.state;
    
                    const deploy = {
                        order_date: delivery_time,
                        order_num: `Ordine#${Math.floor(new Date())}`,
                        price: total_price,
                        address: {
                            address1,
                            delivery_time,  
                            floor, 
                            intercom, 
                            postalCode, 
                            phone, 
                            riders
                        },
                        product_detail: basketItems,                                    
                        email: sessionStorage.getItem("user_email")
                    }
                    Helper.showSpinner();
                    deliveryProduct(deploy).then(res => {
                        Helper.hideSpinner();           
                        Helper.showToast('success', 3000, "Successfully order!");
                        this.props.history.push(`/user/orders`);
                    })
                    .catch(err => {
                        Helper.hideSpinner();            
                        console.log("get deliveryProduct error:", err);
                    });
                };
            } else {                
                if (restaurant) {
                    this.setState({ is_restaurant_recommend: true });
                } else {
                    this.setState({ is_restaurant_recommend: false });
                };

                if (takeaway_time) {
                    this.setState({ is_takeaway_time: true });
                } else {
                    this.setState({ is_takeaway_time: false });
                };

                if (restaurant_userName) {
                    this.setState({ is_restaurant_userName: true });
                } else {
                    this.setState({ is_restaurant_userName: false });
                };

                if (restaurant_userMobilePhone) {
                    this.setState({ is_restaurant_userMobilePhone: true });
                } else {
                    this.setState({ is_restaurant_userMobilePhone: false });
                };

                if (restaurant_recommend) {
                    this.setState({ is_restaurant_recommend: true });
                } else {
                    this.setState({ is_restaurant_recommend: false });
                };
            }

            

        } else {
            Helper.showToast('error', 3000, "Please select products!");
        }
    };

    toggleDeliveryMethod = (status) => {
        this.setState({is_delivery: status});
    };

    togglePaymentMethod = (status) => {
        this.setState({is_card: status});
    };

    confirmVenueNoteModal = (status, reason) => {
        this.setState({isVenueNoteModal: false});
    };

    confirmTimeModal = (status, selected_time) => {
        this.setState({isDeliveryTimeModal: false});
        if(status) {
            if(this.state.is_delivery){
                this.setState({delivery_time: selected_time});
            } else {
                this.setState({takeaway_time: selected_time});
            };
        }
    };

    render() {
        const products = this.state.products || [];
        const groups = _.keys(_.groupBy(products, 'group'));
        const basketItems = this.state.basketItems || [];
        const step = this.state.step;
        const number_dish = _.reduce(_.map(basketItems, (b) => b.number), (a, b) => a + b);
        
        const { 
            address1, delivery_time,  floor, intercom, postalCode, phone, riders, 
            isAddress1, isDeliveryTime, isFloor, isIntercom, isPostalCode, isPhone, isRiders,
            restaurant, takeaway_time, restaurant_userName, restaurant_userMobilePhone, restaurant_recommend, 
            is_restaurant, is_takeaway_time, is_restaurant_userName, is_restaurant_userMobilePhone, is_restaurant_recommend,
            is_delivery,
            card_number, expire_date, cvv, is_card, agree_policy,
            isVenueNoteModal, isDeliveryTimeModal
         } = this.state;
        
        const {restaurantList} = this.props;

        return (
            <div className="dialog-content" style={{display:'block'}}>
                <div className="stepbar container">
                    <div className="step-header">
                        <div className="container">
                            <ul className="progressbar">
                                <li className="active"><span>CARRELLO</span></li>
                                <li className={(step>0)?'active':'none'}><span>ABBINAMENTI</span></li>
                                <li className={(step>1)?'active':'none'}><span>PAGAMENTO</span></li>
                            </ul>
                        </div>
                    </div>

                    {step===0 && <div className="cart" >                        
                        <div className="cart-sub-title">Il mio ordine</div>
                        { number_dish && <div className="product-num">
                            {number_dish} piatt{(number_dish > 1) ? 'i' : 'o'} nel tuo ordine
                        </div>}
                       
                        {basketItems.map((b,index) => (
                            <div className="product-list-item" key={index}>
                                <div className="product-details">                                   
                                    <div className="remove-container">
                                        <ReactSVG src={remove_icon} className='icon-close' onClick={ () => this.handleSelectProduct(b, 'del') }/>
                                    </div>
                                    <div className="product-img-container">
                                        <img src={b.img} alt="product-img" className="product-img"/>
                                    </div>
                                    <div className="ml-5">
                                        <div className="product-name">{b.name}</div>
                                        <div className="product-price">&euro;{b.price.toFixed()}</div>
                                    </div>
                                </div>
                                <div className="counter-container">
                                    <div className="remove" onClick={() => { this.handleSelectProduct(b, 'del1'); }}>
                                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 1L1 0.999999" stroke="#3C5896" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <input type="number" onChange={()=>{}}  className="number-prod" value={b.number} />
                                    <div className="remove" onClick={() => { this.handleSelectProduct(b, 'add'); }}>
                                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 6L1 6M7 12L7 -6.43746e-07L7 12Z" stroke="#3C5896" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        <div className="other-info first-other-info" onClick={()=>this.setState({isVenueNoteModal: true})}>Hai una nota per il locale?</div>
                        <div className="other-info">Inserisci il tuo codice sconto</div>
                        <Row className="border-up totals">
                            {(basketItems.length > 0) ? <><Col xs={9}>Totale</Col>
                            <Col style={{ textAlign: 'right' }}>&euro;{_.reduce(_.map(basketItems, (b) => b.number * b.price), (a, b) => a + b).toFixed(2)}</Col></> : <Col>&nbsp;</Col>}
                        </Row>
                    </div>}

                    {step===1 && <div className="cart-addon container">
                        {_.map(groups, (g,index1) => {
                            return <div className="cart-addon__group"><h2   key={`group-${index1}`}  className="group-title">{g}</h2>
                            <div className="group-container" id={g.toLowerCase().replace(/ /g, '-')}>

                                {_.filter(products, { group: g }).map((p,index2) => {
                                    return <ThumbnailAddOn product={p}  onSelectProduct={this.handleSelectProduct} />
                                    
                                })}
                            </div></div>
                        })}
                        <Row className="border-up totals">
                            {(basketItems.length > 0) ? 
                                <><Col xs={9}>Totale</Col>
                                    <Col style={{ textAlign: 'right' }}>&euro;{_.reduce(_.map(basketItems, (b) => b.number * b.price), (a, b) => a + b).toFixed(2)}</Col>
                                </> 
                                : 
                                <Col>&nbsp;</Col>
                            }
                        </Row>                        
                    </div>
                    } 

                    {step===2 && <div className="cart delivery-takeaway" >                                
                        <div >
                            <div className="cart-delivery-takeaway"  >
                                <div className="sub-title-container">
                                    Dettagli ordine
                                </div>

                                <div className="method-container">
                                    <div className="delivery-method-container">
                                        <div className={`delivery-icon-container mr-3 ${is_delivery? "delivery-active" : "delivery-inActive"}`} onClick={()=>this.toggleDeliveryMethod(true)}>
                                            <img src={delivery_icon} alt="method-icon" className="delivery-icon"/>
                                        </div>
                                        <div className="div-auto-margin">{is_delivery ? `Delivery con consegna alle ${delivery_time}` : 'Passa a Delivery'}</div>
                                    </div>
                                    <div className="takeaway-method-container">
                                        <div className={`delivery-icon-container mr-3 ${is_delivery? "delivery-inActive" : "delivery-active"}`} onClick={()=>this.toggleDeliveryMethod(false)}>
                                            <img src={takeaway_icon} alt="method-icon" className="takeaway-icon"/>
                                        </div>
                                        <div className="div-auto-margin">{!is_delivery ? `Ritiro alle ${takeaway_time}` : 'Passa a Take Away'}</div>
                                    </div>
                                </div>

                                
                                <div className="sub-title-container">
                                    {is_delivery? "Indirizzo di consegna" : "Ristorante"}
                                </div>

                                {is_delivery ? 
                                    (<div className="address-container">
                                        <div className="row">
                                            <div className="col-lg-6 left-input">
                                                <span className="label">INDIRIZZO E NUMERO CIVICO</span>
                                                <input 
                                                    type="text"                                            
                                                    className={`${isAddress1? "" : "error-input"}`}
                                                    value={address1}
                                                    onChange={(e) => { this.setState({ address1: e.target.value }) }} 
                                                />
                                            </div>
                                            <div className="col-lg-6 right-input">
                                                <span className="label">ORARIO DI CONSEGNA</span>
                                                {/* <input 
                                                    type="text" 
                                                    className={`${isDeliveryTime? "" : "error-input"}`}
                                                    value={delivery_time}
                                                    onChange={(e) => { this.setState({ delivery_time: e.target.value }) }} 
                                                /> */}
                                                <div className= {`time-select-content ${isDeliveryTime? "" : "error-time"}`} onClick={()=>this.setState({isDeliveryTimeModal: true})}>
                                                    <div>{delivery_time}</div>
                                                    <img src={dropDonw_icon} alt="drop-down-icon" className="drop-down-icon"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 left-input">
                                                <span className="label">PIANO E INTERNO</span>
                                                <input 
                                                    type="text" 
                                                    className={`${isFloor? "" : "error-input"}`}
                                                    value={floor}
                                                    onChange={(e) => { this.setState({ floor: e.target.value }) }} 
                                                />
                                            </div>
                                            <div className="col-lg-6 right-input">
                                                <span className="label">CITOFONO</span>
                                                <input 
                                                    type="text" 
                                                    className={`${isIntercom? "" : "error-input"}`}
                                                    value={intercom}
                                                    onChange={(e) => { this.setState({ intercom: e.target.value }) }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 left-input">
                                                <span className="label">CAP</span>
                                                <input 
                                                    type="number" 
                                                    className={`${isPostalCode? "" : "error-input"}`}
                                                    value={postalCode}
                                                    onChange={(e) => { this.setState({ postalCode: e.target.value }) }} 
                                                />
                                            </div>
                                            <div className="col-lg-6 right-input">
                                                <span className="label">TELEFONO</span>
                                                <input 
                                                    type="number" 
                                                    className={`${isPhone? "" : "error-input"}`}
                                                    value={phone}
                                                    onChange={(e) => { this.setState({ phone: e.target.value }) }} 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12" style={{padding: 0}}>
                                            <span className="label">ISTRIZIONI PER IL RIDER</span>
                                            <input 
                                                type="text" 
                                                className={`${isRiders? "" : "error-input"}`}
                                                value={riders}
                                                onChange= {(event)=>this.setState({riders : event.target.value})}
                                            />
                                        </div>                         
                                    </div>
                                     ) : (
                                        <div className="address-container">
                                            <div className="row">
                                                <div className="col-lg-6 left-input">
                                                    <span className="label">RISTORANTE SELEZIONATO</span>                                                    
                                                    <SelectBox 
                                                        value={restaurant}
                                                        options={restaurantList}
                                                        onChange={val => this.setState({restaurant: val.name})}
                                                        className={`time-select-content ${is_restaurant_recommend ? "" : "error-input"}`}
                                                    />
                                                </div>
                                                <div className="col-lg-6 right-input">
                                                    <span className="label">ORARIO DI RITIRO</span>                                                    
                                                    <div className= {`time-select-content ${is_takeaway_time? "" : "error-time"}`} onClick={()=>this.setState({isDeliveryTimeModal: true})}>
                                                        <div>{takeaway_time}</div>
                                                        <img src={dropDonw_icon} alt="drop-down-icon" className="drop-down-icon"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 left-input">
                                                    <span className="label">NOME</span>
                                                    <input 
                                                        type="text" 
                                                        className={`${is_restaurant_userName? "" : "error-input"}`}
                                                        value={restaurant_userName}
                                                        onChange={(e) => { this.setState({ restaurant_userName: e.target.value }) }} 
                                                    />
                                                </div>
                                                <div className="col-lg-6 right-input">
                                                    <span className="label">CELLULARE</span>
                                                    <input 
                                                        type="text" 
                                                        className={`${is_restaurant_userMobilePhone? "" : "error-input"}`}
                                                        value={restaurant_userMobilePhone}
                                                        onChange={(e) => { this.setState({ restaurant_userMobilePhone: e.target.value }) }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12" style={{padding: 0}}>
                                                <span className="label">ISTRIZIONI PER IL RISTORANTE</span>                                                
                                                <div>
                                                    <textarea                                   
                                                        placeholder="Es. - È la porta nera vicino al negozio di animali. Per favore chiama quando arrivi." 
                                                        value={restaurant_recommend} 
                                                        className={`${is_restaurant_recommend? "" : "error-input"}`}
                                                        onChange= {(event)=>this.setState({restaurant_recommend : event.target.value})} 
                                                    /> 
                                                </div>
                                            </div>                         
                                        </div>
                                    )
                                }

                                        
                                <div className="sub-title-container">
                                    Metodi di pagamento
                                </div>
                                <div>
                                    <div className="checked-container">
                                        <div className="checked-circle" onClick={()=>this.togglePaymentMethod(true)}>
                                            <div className={`${is_card ? "checked-in" : ""}`}/>
                                        </div>
                                        <span className="label ml-3">AGGIUNGI CARTA DI PAGAMENTO</span>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12" style={{padding: 0}}>
                                            <span className="label">NUMERO CARTA</span>
                                            <input 
                                                type="number" 
                                                style={{width:'100%'}} 
                                                placeholder="Numero carta"  
                                                value={card_number}
                                                onChange={(e) => { this.setState({ card_number: e.target.value }) }} 
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 left-input">
                                            <span className="label">SCADENZA</span>
                                            <input 
                                                type="number" 
                                                style={{width:'100%'}} 
                                                placeholder="MM/YY" defaultValue={` `}
                                                value={expire_date}
                                                onChange={(e) => { this.setState({ expire_date: e.target.value }) }}
                                            />
                                        </div>
                                        <div className="col-lg-6 right-input">
                                            <span className="label">NUMERO CVV</span>
                                            <input 
                                                type="number" 
                                                style={{width:'100%'}} 
                                                placeholder="CVV"  
                                                value={cvv}
                                                onChange={(e) => { this.setState({ cvv: e.target.value }) }}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="checked-container add-paypal-check">
                                        <div className="checked-circle" onClick={()=>this.togglePaymentMethod(false)}>
                                            <div className={`${is_card ? "" : "checked-in"}`}/>
                                        </div>
                                        <span className="label ml-3">AGGIUNGI ACCOUNT PAYPAL</span>
                                    </div>

                                    <div className="paypal-safely">
                                        I tuoi dati sono salvati in piena sicurezza dal nostro partener che processa i pagamenti, criptato secondo le normative vigenti.
                                    </div>
                                </div>

                                <div className="sub-title-container">
                                    Codice promozionale
                                </div>
                                <div className="form__bottom">
                                    <div className="promotioncode-container">
                                        <span className="label">AGGIUNGI CODICE PROMOZIONALE</span>
                                        <div className="row ">
                                            <div className="col-lg-8 left-input">
                                                <input type="text" style={{width:'100%'}} placeholder="Numero carta"  defaultValue={` `}/>
                                            </div>
                                            <div className="col-lg-4 send-bnt-container" style={{padding: 0,}}>
                                                <div className="send-button">INVIA</div>
                                            </div>
                                            <div className="checked-container ">
                                                <div className="checked-circle" onClick={()=>this.setState({agree_policy: !agree_policy})}>
                                                    <div className={`${agree_policy ? "checked-in" : ""}`}/>
                                                </div>
                                                <span className="label ml-3">Ho letto e accetto i Termini & Condizioni e l’Informativa sulla Privacy</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="email-promotion">
                                        Spunta questa casella se non desideri ricevere offerte e promozioni commerciali via email da Ichi Station. Potrai decidere in qualunque momento di non ricevere più tali comunicazioni e non divulgheremo mai i tuoi dati ad altre aziende
                                    </div>
                                    <div xs={12}><button className="btn btn-ichistation">CONFERMA L'ORDINE &euro; {_.reduce(_.map(basketItems, (b) => b.number * b.price), (a, b) => a + b)}</button></div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>

                <div className="step-footer">                        
                    <div className="container footer-container">
                        <div className="before-btn" onClick={()=>this.before()}>                            
                            <h5 className="tot"  style={{color:'#aaa'}} >&lt;- Indietro</h5>                            
                        </div>
                        <div className="continu-btn-area"> 
                            <div className="total-area">Totale &euro;{_.reduce(_.map(basketItems, (b) => b.number * b.price), (a, b) => a + b).toFixed(2)}</div>
                            <div onClick={()=>this.next()} className="btn btn-ichistation ">Prosegui con l'Ordine</div>
                        </div>
                    </div>
                </div>
                <VenueNoteModal
                    isVenueNoteModal = {isVenueNoteModal}
                    confirmVenueNoteModal = {(e, r) => this.confirmVenueNoteModal ( e, r)}
                />
                <DeliveryTimeModal
                    isDeliveryTimeModal = {isDeliveryTimeModal}
                    confirmTimeModal = {(e, r) => this.confirmTimeModal ( e, r)}
                />
            </div>
        )
    }
}