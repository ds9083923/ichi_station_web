import React from 'react';
import './HomeModal.scss';
import { Modal } from 'react-bootstrap';
import close_icon from "../../assets/images/HomePage/close-icon.png";
import levelIcon from "../../assets/images/HomePage/level-icon.png";
import play_store_icon from "../../assets/images/HomePage/play-store-icon.png";
import apple_store_icon from "../../assets/images/HomePage/apple-store-icon.png";

export default class HomeModal extends React.Component {
    
    closeModal = () => {
        this.props.closeModal();
    };

    render() {
        const { isHomeModal } = this.props;
    
        return (
            <Modal centered show={isHomeModal} onHide={this.closeModal} className="home-modal-component">    
                <div className="confirm-content">
                    <div className="close-btn" onClick={this.closeModal}> 
                        <img src={close_icon} alt="icon-close" className="icon-close"/>
                    </div>
                    <div className="content-area v-r">
                        <img src={levelIcon} alt="level-icon" />
                        <h2>Scarica la nostra <br/> nuova App</h2>
                        <p>DOWNLOAD</p>
                        <div className="app-store-icons">
                            <div>
                                <img src={apple_store_icon} alt="apple-store-icon" className="apple-store-icon"/>
                            </div>
                            <div>
                                <img src={play_store_icon} alt="play-store-icon" className="play-store-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    };
};