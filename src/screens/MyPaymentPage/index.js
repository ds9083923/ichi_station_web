import React, { Component } from "react";
import {
    DashBoardHeader,
    DashboardMenu,
    MyPayment,
} from "../../components";
import $ from 'jquery';
import "./MyPaymentPage.scss";

class MyPaymentPage extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    };

    componentDidMount(){
        $("header").addClass("mobile-dialog")
        $("header").addClass("isLogin")
    };

    componentWillUnmount(){
        $("header").removeClass("mobile-dialog")
        $("header").removeClass("isLogin")
    };

    render() {
        return (
            <div className="paymentPage-component">
                <div className="container paymentPage-container">
                    <div className="header-container">
                        <DashBoardHeader />
                    </div>
                    <div className="row paymentPage-content">
                        <div className="col-lg-4 item-content">
                            <DashboardMenu category_id = {3}/>
                        </div>
                        <div className="col-lg-8 item-content">
                            <MyPayment />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPaymentPage;