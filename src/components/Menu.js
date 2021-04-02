import React, { Component } from "react";
import { Link } from 'react-router-dom';
import _ from 'underscore';
import $ from 'jquery';
import {
    Row, Col, Container, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'react-bootstrap';
import { ReactSVG } from 'react-svg'
import Thumbnail from './Thumbnail';
import {db} from '../config/firebase';
import { NavLink, withRouter } from "react-router-dom";
import './Menu.scss'
import Helper from '../utils/Helper';
import { getProducts, addProjectId } from '../store/actions/coreActions';
import remove_icon from "../assets/images/Icons/remove_icon.svg";
import delivery_icon from "../assets/images/Icons/delivery-icon.svg";

class Menu extends Component {
    
    constructor(props) {
        super(props);
            
        let basketItems = [];
        let showCart=false;
 
        this.state = {
            showCart:showCart,
            basketItems: basketItems,
            deliveryAddress: '',
            numbers: basketItems.length.toFixed, 
        };
        console.log(props.location.product);
    };
    
    handleSelectProduct = (product, operation) => {
        
        let basketItems = this.state.basketItems;
        console.log("=========basketItems============", basketItems);
        if (operation === 'del') {
            basketItems = _.filter(basketItems, (b) => { return (b.name !== product.name); });
        };

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

    async componentDidMount() {
        const user_uid = sessionStorage.getItem("user_uid");

        $("header").addClass("mobile-dialog");
        
        if(user_uid){
            $("header").addClass("isLogin");      
        } else {
            $("header").addClass("unLogin");
        }

         Helper.showSpinner();
         getProducts('main').then(res => {
           Helper.hideSpinner();
           console.log('getProducts list res: ', res);
           this.setState({products: res});           
         })
         .catch(err => {
             Helper.hideSpinner();            
             console.log("get products error:", err);
         });

        if (localStorage.getItem("basketItems")) {
            this.setState({basketItems:JSON.parse(localStorage.getItem("basketItems"))});
        };
      
        // window.addEventListener("scroll", this.handleScrollWindow);
        // document.getElementById("menu-scrollbar").addEventListener("scroll", this.handleScrollMenu);
        //this.handleSelectProduct(null,'');

        const { order } = this.props.location;
        const { deliveryAddress } = this.state;
        if(this.props.location.order) {
            if(order.type === 'delivery'){
                this.setState({deliveryAddress: `${order.address}, ${order.civico}`});
            } else {
                this.setState({deliveryAddress: order.restaurant_street});
            };
        };
    };

    componentWillUnmount() {
        $("header").removeClass("mobile-dialog");
        $("header").removeClass("unLogin");
        // window.removeEventListener("scroll", this.handleScrollWindow);
        // document.getElementById("menu-scrollbar").removeEventListener("scroll", this.handleScrollMenu);
    };

    componentDidUpdate(prevProps, prevState) {         
        if (this.props.location.product) {
                console.log(this.props.location.product);
                this.handleSelectProduct(this.props.location.product,'add');
                this.props.location.product = null;
        };
        this.handleScrollMenu();
        this.handleScrollWindow();
    };

    activateGroup = (id) => {
        $(".menu-group").removeClass("active");
        $(`.menu-group.${id}`).addClass("active");
        console.log(id);
        if ($(`#${id}`).length > 0)
            $("html,body").animate({ scrollTop: $("#" + id).offset().top - 300 }, 'slow');
        document.querySelector(`.menu-group.${id}`).scrollIntoView({
            block: "start",
            behavior: "smooth",
            inline: 'center'
        });
    }

    handleScrollMenu = () => {
        const scrollLeft = $("#menu-scrollbar").scrollLeft();
        const scrollLastElementData = $("#menu-scrollbar .menu-group:last")
        const scrollLastElement = (scrollLastElementData.offset())?scrollLastElementData.offset().left:0;

        if (scrollLeft > 150) { $(".prev-button", "#menu-scrollbar").show(); }
        else { $(".prev-button", "#menu-scrollbar").hide(); }
        if (scrollLeft < scrollLastElement - 300) {
            $(".next-button", "#menu-scrollbar").show();
        } else {
            $(".next-button", "#menu-scrollbar").hide();
        };
    };

    handleScrollWindow = () => {
        $(".menu-group").removeClass("active");
        let lastRow=$("#products > .row").length;
        $("#products > .row").each((index, value) => {

            if ($(".menu-group.active").length === 0 && (($(value).offset().top > window.scrollY +200)||lastRow-1===index )) {
                console.log(lastRow + " "+ index)
                //console.log(`row top ${$(value).offset().top}  windows scrolly ${window.scrollY}`);
                let id = $(value).attr("id");
                console.log(id);
                $(`.menu-group.${id}`).addClass("active");
                const scrollLeft = $("#menu-scrollbar").scrollLeft();
                const scrollLastElement = $(`.menu-group.${id}`, "#menu-scrollbar").offset().left;
                console.log(`menu ${scrollLeft} vs element ${scrollLastElement}`);
                document.querySelector(`.menu-group.${id}`).scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                    inline: 'center'
                });
                // if (scrollLastElement > 300)
                //     $("#menu-scrollbar").animate({scrollLeft: 0 },'slow');
            }
        });
        //   if($(".menu-group.active").length===0 ){
        //     if (window.scrollY===0){
        //         $(".menu-group:first").addClass("active"); 
        //       }else
        //     if (window.scrollY===window.pageYOffset){
        //         $(".menu-group:last").addClass("active"); 
        //       } 
        //    }
    };

    prevMenuBtn = () => {
        const scrollLeft = $("#menu-scrollbar").scrollLeft() - 600;
        console.log(scrollLeft);
        $("#menu-scrollbar").animate({ scrollLeft: Math.max(0, scrollLeft) }, 'slow');
    };

    nextMenuBtn = () => {
        const scrollLeft = $("#menu-scrollbar").scrollLeft() + 600;
        console.log(scrollLeft);
        const scrollLastElement = $(".menu-group:last", "#menu-scrollbar").offset().left;
        $("#menu-scrollbar").animate({ scrollLeft: Math.min(scrollLeft, scrollLastElement) }, 'slow');
    };

    showCart(){
        this.setState((state)=>({
            ...state,showCart:!state.showCart
        }));
    };

    navigateTo(id){
        console.log($(`#${id}`).offset().top);
        const destination=$(`#${id}`).offset().top;
        $('#root').animate({ scrollTop: destination }, 600);        
    };

    delivery = () => {
        this.props.history.push(`/user/menu/delivery`)
    };

    order =(basketItems) => {
        this.props.history.push({pathname: `/user/cart/:step`, step:0, basketItems:basketItems});
    };

    render() {
        const products = this.state.products || [];
        console.log("====products========", products)

        const groups = _.keys(_.groupBy(products, 'group')) ||[];
        console.log("====groups========", groups)
        const basketItems = this.state.basketItems || [];
        const deliveryAddress = this.state.deliveryAddress;
        const number_dish = _.reduce(_.map(basketItems, (b) => b.number), (a, b) => a + b);
        
        return (
            <div className="Restaurants Dashboard">
                <br></br>
                <Container>
                    <Row>
                        <Col>
                            <div id="menu-scrollbar">
                                <div className="fixed-menu">
                                    <h2 className="menu">MENU</h2>
                                </div>
                                <div>
                                    <h2 className="menu">MENU</h2>
                                </div>
                                {_.map(groups, (g,index) => {
                                    var id = g.toLowerCase().replace(/ /g, '-');
                                    return <div key={`menu-${index}`} id={`menu-group-${id}`} onClick={() => { this.activateGroup(id) }} className={`menu-group ${id}`}>
                                        <span className="group-title">{g}</span>
                                        <img src={_.filter(products, { group: g })[0].img} alt="" />
                                    </div>
                                })}
                                <div>
                                    <h2 className="menu">&nbsp;</h2>
                                </div>
                                <div className="prev-button" onClick={() => { this.prevMenuBtn() }}>
                                    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d)">
                                            <rect x="24" y="24" width="40" height="40" rx="4" fill="#3C5896" />
                                        </g>
                                        <path d="M47 39L51 44M51 44L47 49M51 44H37" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <defs>
                                            <filter id="filter0_d" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="12" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>

                                <div className="next-button" onClick={() => { this.nextMenuBtn() }}>
                                    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d)">
                                            <rect x="24" y="24" width="40" height="40" rx="4" fill="#3C5896" />
                                        </g>
                                        <path d="M47 39L51 44M51 44L47 49M51 44H37" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <defs>
                                            <filter id="filter0_d" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="12" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="scrollbar-products">
                    <Row>
                        <Col className="products-grid">
                            <div id='products'>
                                {_.map(groups, (g,index1) => (
                                    <div>
                                        <h2  key={`group-${index1}`}  className="group-title">{g}</h2>
                                        <div className="product-group-container" id={g.toLowerCase().replace(/ /g, '-')}>
                                            {_.filter(products, { group: g }).map((item,index2) => (
                                                <Thumbnail product={item} onSelectProduct={this.handleSelectProduct}  />
                                            ))}
                                        </div>
                                    </div>
                                ))}                            
                            </div>

                            <div class="menu-summary" onClick={()=>this.showCart()}>
                                <div className="menu-summary__count">
                                <span>
                                {_.reduce(_.map(basketItems, (b) => b.number), (a, b) => a + b)}
                                    </span>
                                </div>
                                <span className="menu-summary__text">vai al carrelo</span>
                                <span className="menu-summary__price">€ {_.reduce(_.map(basketItems, (b) => b.number * b.price), (a, b) => a + b)}</span>
                            </div>

                            <div className="row footer-delivery">
                                <div className="row col-lg-6">
                                    <div  className="col-lg-2">
                                        <div onClick={()=>this.delivery()}>
                                            <div className="delivery-icon-container">
                                                <ReactSVG src={delivery_icon}/>
                                            </div>
                                            <div className="delivery-icon-des">Delivery</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="bottom-item-category">Indirizzo Consegna</div>
                                        <div className="bottom-item-value">{deliveryAddress}</div>

                                    </div>
                                    <div className="col-lg-5 respons-font">
                                        <div className="bottom-item-category">Orario Consegna</div>
                                        <div className="bottom-item-value">Oggi alle ore 19:30</div>
                                    </div>
                                </div>

                                <div className="col-lg-6 change-btn-container">
                                    <div className="change-btn">CAMBIA</div>
                                </div>
                            </div>
                        </Col>

                        <Col className={`cart ${(this.state.showCart)? 'show-cart':'hide-cart'}`}  >
                            <div className="row shopping-cart-header">
                                <div className="shopping-cart-header-left">
                                    <button className="cart__close-button mr-3" onClick={()=>this.showCart()}>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.646447" y1="28.9309" x2="28.9307" y2="0.6466" stroke="#3C5896"/>
                                            <line x1="1.35502" y1="0.646447" x2="29.6393" y2="28.9307" stroke="#3C5896"/>
                                        </svg>
                                    </button>
                                    <h6 style={{ fontWeight: 'bold', divor: '#3C5896', fontSize: '20px' }}>Carrello</h6>
                                </div>
                                <div className="">
                                    {number_dish > 0 ? <span className="description">{number_dish} piatt{(number_dish > 1) ? 'i' : 'o'} nel tuo ordine</span> : ''}
                                </div>
                            </div>

                            <div className="menu-cart-container">
                                {basketItems.map((b,index) => (
                                    <div className="product-list-item" key={index}>
                                        <div className="product-details">                                   
                                            <div className="remove-container">
                                                <ReactSVG src={remove_icon} className='icon-close' onClick={ () => this.handleSelectProduct(b, 'del') }/>
                                            </div>
                                            <div className="product-img-container">
                                                <img src={b.img} alt="product-img" className="product-img"/>
                                            </div>
                                            <div className="ml-3">
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
                            </div>                                

                            <div className="row totals">
                                {(basketItems.length > 0) ? <><span>Totale</span>
                                    <div>&euro;{_.reduce(_.map(basketItems, (b) => b.number * b.price), (a, b) => a + b).toFixed(2)}</div></> : <Col>&nbsp;</Col>}
                            </div>

                            <div className="order-button"> 
                                <div className="btn btn-ichistation btn-order" onClick={()=>this.order(basketItems)}>ORDINA</div>
                            </div>
                        </Col>
                    </Row>           
                </div>
            </div>
        )
    }
}

export default Menu;