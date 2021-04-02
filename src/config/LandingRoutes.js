import React, {Component} from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {
    HomePage,
    UserLoginPage,
    UserSignupPage,    
    ProductPage,
} from "../screens";

import { 
    Menu, 
    PendingOrders, 
    InProgressOrders,
    DeliveredOrders
} from "../components";

class LandingRoutes extends Component {
    constructor() {
        super();
        this.state = {
           
        };
    };

    componentDidMount(){
        const user_uid = sessionStorage.getItem("user_uid");        
        if(user_uid){
            // this.props.history.push('/user/menu');
        };
    };

    render() {        
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />

                    <Route exact path="/userLogin" component={UserLoginPage} />
                    <Route exact path="/UserSignup" component={UserSignupPage} />                    

                    <Route exact path="/menu" component={Menu} />
                    <Route path="/menu/product" component={ProductPage} />                    

                    <Route path="/restaurant/pending" component={PendingOrders} />
                    <Route path="/restaurant/inprogress" component={InProgressOrders} />
                    <Route path="/restaurant/delivered" component={DeliveredOrders} /> 
                </Switch>               
            </div>                
        )
    }
}

export default connect()(withRouter(LandingRoutes));