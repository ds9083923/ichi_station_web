import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'; 
import'./Header.scss'
import { connect } from "react-redux";
import { ReactSVG } from 'react-svg'
import logo from "../assets/images/Icons/logo.svg";
import restaurant_logo_icon from "../assets/images/Icons/restaurant-logo-icon.svg";
import hamburger_menu_icon from "../assets/images/Icons/hamburger-menu-icon.svg";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUser: false,
            isLoginClicked: false,
            isDialog: false,
        }
    }

    goBack(){
        const { pathname } = this.props.location;
        if (pathname === "/userLogin" || pathname === "/UserSignup") {
            this.props.history.push(`/`);
        } else {
            window.history.back();
        };
    };

    openSidebar = () => {
        this.props.toggleSidebar(true);
    };

    restaurantModal = () => {
        this.props.restaurantModal(true);
    };
    componentDidMount(){
    console.log(this.props.location.pathname);
    }

    render() {
        const { isUser, isLoginClicked,isDialog } = this.state;
        const user_uid = sessionStorage.getItem("user_uid");
        return (
            <header className="header">
                <div className="header__container">
                    <div className="header__left">
                    
                        <Link className="header__logo" to={`${user_uid? '/user/menu' : '/'}`}>
                            <ReactSVG src={logo}/>                        
                        </Link>
                        <Link className="link menu" to={`${user_uid? '/user/menu' : '/menu'}`} style={{ float: 'left' }} >
                            <button className="btn btn-ichistation btn-menu" >MENU</button>
                        </Link>                    
                    </div>
                    <span className="current-location" style={(this.props.location.pathname.trim()=='/')?{display:"none",}:{display:"block"}}>
                        {(this.props.location.pathname.includes(':step'))?'Carello':this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/')+1)}
                        </span>
                    <nav className="header__nav">
                        <Link className="link" onClick={() => this.restaurantModal()}>
                            {/* <ReactSVG src={restaurant_logo_icon}/> */}
                            <svg width="50" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="5.5" x2="18" y2="5.5" stroke="#3C5896"></line><line x1="3" y1="24.5" x2="18" y2="24.5" stroke="#3C5896"></line><line x1="2.5" y1="25" x2="2.5" y2="14" stroke="#3C5896"></line><line x1="18.5" y1="25" x2="18.5" y2="14" stroke="#3C5896"></line><path d="M3 8L18 8L20 14H1L3 8Z" stroke="#3C5896" strokeLinejoin="round"></path><rect x="5" y="14" width="11" height="4" stroke="#3C5896"></rect><path d="M12 10.8136L11.8091 10.247L10.7808 10.6453V9.5H10.4999H10.2191V10.6453L9.19077 10.247L9 10.8136L10.0477 11.1754L9.39517 12.1375L9.88108 12.5L10.4999 11.5007L11.1188 12.5L11.6047 12.1375L10.9523 11.1754L12 10.8136Z" fill="#3C5896"></path></svg>
                            I NOSTRI RISTORANTI
                        </Link>
                        <div className="link user-login-signup">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 20C12.5 17.2386 9.81371 15 6.5 15C3.18629 15 0.5 17.2386 0.5 20" stroke="#3C5896" />
                                <line x1="0.5" y1="20" x2="0.5" y2="26" stroke="#3C5896" />
                                <line x1="12.5" y1="20" x2="12.5" y2="26" stroke="#3C5896" />
                                <circle cx="6.5" cy="9" r="4" stroke="#3C5896" />
                                <line x1="0.5" y1="25.5" x2="12.5" y2="25.5" stroke="#3C5896" />
                            </svg>
                            <Link className="" to="/userLogin" onClick={() => { this.setState({ isUser: true, isLoginClicked: true, }) }}>ACCEDI</Link> 
                            <Link className="" to="/userSignup" onClick={() => { this.setState({ isUser: true, isLoginClicked: false, }) }}>ISCRIVITI</Link>
                        </div>

                        <Link className="link  my-bill" to="/user/orders">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 20C12.5 17.2386 9.81371 15 6.5 15C3.18629 15 0.5 17.2386 0.5 20" stroke="#3C5896" />
                                <line x1="0.5" y1="20" x2="0.5" y2="26" stroke="#3C5896" />
                                <line x1="12.5" y1="20" x2="12.5" y2="26" stroke="#3C5896" />
                                <circle cx="6.5" cy="9" r="4" stroke="#3C5896" />
                                <line x1="0.5" y1="25.5" x2="12.5" y2="25.5" stroke="#3C5896" />
                            </svg>IL MIO CONTO
                        </Link>

                        <Link className="link" to="/user/cart">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.2484" cy="9.62336" r="4.12336" stroke="#3C5896" />
                                <rect x="3.5" y="10.3801" width="17.4935" height="13.3838" fill="white" stroke="#3C5896" strokeLinecap="square" strokeLinejoin="round" />
                                <line x1="8.125" y1="10.3938" x2="8.125" y2="14.2466" stroke="#3C5896" />
                                <line x1="16.5977" y1="10.3938" x2="16.5977" y2="14.2466" stroke="#3C5896" />
                            </svg>CARRELLO
                        </Link>

                        <div className="hamburger" onClick={this.openSidebar}>                            
                            <ReactSVG src={hamburger_menu_icon}/>
                        </div>
                        <div className="isDialog" onClick={()=>this.goBack()}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.505822" y1="28.7885" x2 ="28.7901" y2="0.504266" stroke="#3C5896"/>
                                <line x1="1.21293" y1="0.504113" x2="29.4972" y2="28.7884" stroke="#3C5896"/>
                            </svg>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default connect()(withRouter(Header));
 