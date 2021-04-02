import React, { Component } from 'react';
import './Sidebar.scss';
import close_icon from "../../assets/images/HomePage/close-icon2.png";
import { Link } from 'react-router-dom';
import facebook_icon from "../../assets/images/HomePage/facebook-white-icon.png";
import instagram_icon from "../../assets/images/HomePage/instagram-white-icon.png";

export default class Sidebar extends Component {

    closeSidebar = () => {
        this.props.toggleSidebar(false);
    };

    restaurantModal = () => {
        this.props.restaurantModal(true);
        this.props.toggleSidebar(false);
    };

    render() {
        const { isSidebar } = this.props;
        return (
            <div className={`sidebar-component ${isSidebar ? 'active' : 'inactive'}`}>
                <div className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="close-btn-area">                            
                            <img src={close_icon} alt="close-icon" className="close-btn" onClick={ () => this.closeSidebar() }/>
                        </div>
                        <div className="menu">
                            <div className="menu-container">
                                <div className="main-menu">
                                    <Link className="menu-item" exact to="/menu" onClick={this.closeSidebar}>Menu</Link>
                                    <Link className="menu-item" onClick={this.restaurantModal}>I nostri ristoranti</Link>
                                    <Link className="menu-item" exact to="/userLogin" onClick={this.closeSidebar}>Collegati / Iscriviti</Link>
                                    <Link className="menu-item" exact to="/blog" onClick={this.closeSidebar}>Blog</Link>
                                    <Link className="menu-item" exact to="/menu" onClick={this.closeSidebar}>Programma fedeltà</Link>
                                </div>

                                <div className="sub-menu">
                                    <Link className="sub-menu-item" exact to="/" onClick={this.closeSidebar}>Servizio Clienti</Link>
                                    <Link className="sub-menu-item" exact to="/" onClick={this.closeSidebar}>Note legali</Link>
                                    <Link className="sub-menu-item" exact to="/" onClick={this.closeSidebar}>scarica la nostra app</Link>
                                </div>

                                <div className="social-sharing">
                                    <div className="sub-menu-item">seguici su</div>
                                    <div className="social-icons">
                                        <img src={facebook_icon} alt="facebook-icon" className="facebook-icon mr-3"/>
                                        <img src={instagram_icon} alt="instagram-icon" className="instagram-icon"/>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div className="sidebar-block" onClick={ () => this.closeSidebar() }></div>
                </div>
            </div>
        );
    }
}