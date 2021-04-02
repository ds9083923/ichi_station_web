import React from 'react';
import './RestaurantModal.scss';
import { Modal } from 'react-bootstrap';
import img3 from '../../../assets/images/sfondo.jpg';
import { Link, withRouter } from 'react-router-dom';
import Slider from "react-slick";
import { connect } from "react-redux";

const restaurantData = [
    {id: 1, name: "Station Ravizza", location: "Via Carlo Ravizza 24, 20149 Milano (MI)"},
    {id: 2, name: "Station Ravizza", location: "Via Carlo Ravizza 24, 20149 Milano (MI)"},
    {id: 3, name: "Station Ravizza", location: "Via Carlo Ravizza 24, 20149 Milano (MI)"},
    {id: 4, name: "Station Ravizza", location: "Via Carlo Ravizza 24, 20149 Milano (MI)"},
    {id: 5, name: "Station Ravizza", location: "Via Carlo Ravizza 24, 20149 Milano (MI)"},
    {id: 6, name: "Station Ravizza", location: "Via Carlo Ravizza 24, 20149 Milano (MI)"},
    {id: 7, name: "Station Ravizza", location: "Via Carlo Ravizza 24, 20149 Milano (MI)"},
]

class RestaurantModal extends React.Component {

    state = {
        currentIndex: 0,
        width: window.innerWidth,
    };
    
    closeModal = () => {
        this.props.toggleRestaurantModal(false);
    };

    restauantDetail = (id) => {
        this.props.history.push(`/restaurant/${id}`);
        this.props.toggleRestaurantModal(false);
    };

    itemClick = (index) => {
        this.setState({currentIndex: index})
    }

    render() {
        const { isRestaurantModal, restaurantList,  } = this.props;
        const { currentIndex, width } = this.state
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: width > 1024 ? 3.5 : width > 600? 2.5 : 1.5,
            slidesToScroll: 1,
            arrows: false,            
        };

        return (            
            <Modal 
                show={isRestaurantModal} 
                onHide={this.closeModal} 
                animation={false}
                className="restaurant-modal-component">
                <div className="restaurant-moal-container">
                    <Slider 
                        {...settings}
                        ref={c => (this.slider = c)}>
                        {restaurantList.map((item, index)=> (
                            <div key={index} className="item" onClick = {() => this.itemClick(index)}> 
                                <div className={`item-content ${currentIndex === index ? "active" : ""}`}>
                                    <img src={item.img} className="item-img" />
                                    <div className="description-content">
                                        <div onClick={() => this.restauantDetail(item.id)} className="name-area">
                                            <div className="name-area">
                                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.1482 7.00586L16.057 3.98407L10.179 6.10801V0H8.5737H6.96838V6.10801L1.09045 3.98407L0 7.00586L5.98885 8.93569L2.25884 14.0664L5.0363 16L8.5737 10.6707L12.1111 16L14.8886 14.0664L11.1593 8.93569L17.1482 7.00586Z" fill="#E0D268"/>
                                                </svg> 
                                                <div className="name">{item.name}</div>
                                           </div>
                                           <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L5 6L1 11" stroke="#3C5896" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="location">{item.street}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Modal>
        )
    };
};

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, {
    
})(withRouter(RestaurantModal));