import React, { Component } from "react";
import {
    DashBoardHeader,
    DashboardMenu,
    MyAddress,
} from "../../components";
import $ from 'jquery';
import "./MyAddressPage.scss";

class MyAddressPage extends Component {
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
            <div className="addressPage-component">
                <div className="container addressPage-container">
                    <div className="header-container">
                        <DashBoardHeader />
                    </div>
                    <div className="row addressPage-content">
                        <div className="col-lg-4 item-content">
                            <DashboardMenu category_id = {2}/>
                        </div>
                        <div className="col-lg-8 item-content">
                            <MyAddress />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAddressPage;