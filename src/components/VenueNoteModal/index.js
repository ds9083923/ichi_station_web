import React from 'react';
import { Modal } from 'react-bootstrap';
import close_icon from "../../assets/images/close-icon.png";

import './VenueNoteModal.scss';

export default class VenueNoteModal extends React.Component {
    state = {
        venue_note: ''
    }

    confirm = (status) => {
        const { venue_note } = this.state;
        this.props.confirmVenueNoteModal(status, venue_note);
    }

    render() {
        const {isVenueNoteModal} = this.props;
        const {venue_note} = this.state;
        return (
            <Modal centered show={isVenueNoteModal} className="note-modal-component">
                <div className="note-modal-content">
                    <img src={close_icon} alt="close-icon" className="close-icon" onClick={()=>this.confirm(false)}/>
                    <div className="content-area v-r">
                        <div className="title">HAI UNA NOTA PER IL LOCALE?</div>
                        <textarea 
                            className="textarea-note" 
                            value={venue_note}
                            placeholder="Inserisci qui il tuo messaggio..."
                            onChange={e => this.setState({venue_note: e.target.value})} 
                        />
                    </div>
                    <div className="confirm-btn-container" >
                        <div className="confirm-btn" onClick={()=>this.confirm(true)}>CONFERMA</div>
                    </div>
                </div>
            </Modal>
        )
    };
};