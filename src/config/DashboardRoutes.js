import React, {Component} from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {
    DeliveryPage,
    TakeAwayPage,
    DeliveryTimePage,
    MyOrdersPage,
    MyAccountPage,
    MyAddressPage,
    MyPaymentPage,
} from "../screens";

import { 
    Menu,
    Cart,
    DeliveryMap,
    DetailMenu
} from "../components";

class DashboardRoutes extends Component {
    constructor() {
        super();
        this.state = {
           
        };
    };

    componentDidMount(){
        const user_uid = sessionStorage.getItem("user_uid");        
        if(!user_uid){
            this.props.history.push('/userLogin');
        };
    };

    render() {
        const {restaurantList} = this.props;        
        return (
            <div>
                <Switch>
                    <Route exact path="/user/menu" component={Menu} />
                    <Route exact path="/user/cart/:step" render={(props) => <Cart restaurantList={restaurantList} {...props} /> }/>                    

                    <Route exact path="/user/menu/takeaway" component={TakeAwayPage} />                    
                    <Route exact path="/user/menu/delivery" component={DeliveryPage} />
                    <Route path="/user/menu/delivery/map" component={DeliveryMap} />
                    <Route path="/user/menu/delivery/time" component={DeliveryTimePage} />

                    <Route path="/user/menu/detail" component={DetailMenu} />

                    <Route exact path="/user/orders" component={MyOrdersPage} />
                    <Route exact path="/user/account" render={(props) => <MyAccountPage restaurantList={restaurantList} {...props} /> }/>
                    <Route exact path="/user/address" component={MyAddressPage} />
                    <Route exact path="/user/payment" component={MyPaymentPage} />
                </Switch>               
            </div>                
        )
    }
}

export default connect()(withRouter(DashboardRoutes));