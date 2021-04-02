import React, { Component } from "react";
import {
    DashBoardHeader,
    DashboardMenu,
    MyOrders,
} from "../../components";
import $ from 'jquery';
import "./MyOrdersPage.scss";

class MyOrdersPage extends Component {
    constructor() {
        super();
        this.state = {

        };
    };

    componentDidMount(){
        $("header").addClass("mobile-dialog");
        $("header").addClass("isLogin");      
    };

    componentWillUnmount(){
        $("header").removeClass("mobile-dialog")
        $("header").removeClass("isLogin")
    };

    render() {        
        return (
            <div className="ordersPage-component">
                <div className="container ordersPage-container">
                    <div className="header-container">
                        <DashBoardHeader />
                    </div>
                    <div className="row ordersPage-content">
                        <div className="col-lg-4 item-content">
                            <DashboardMenu category_id = {0}/>
                        </div>
                        <div className="col-lg-8 item-content">
                            <MyOrders />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyOrdersPage;