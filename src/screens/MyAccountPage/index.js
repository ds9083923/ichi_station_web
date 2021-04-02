import React, { Component } from "react";
import {
    DashBoardHeader,
    DashboardMenu,
    MyAccount,
} from "../../components";
import $ from 'jquery';
import "./MyAccountPage.scss";

class MyAccountPage extends Component {
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
        const { restaurantList } = this.props;
        console.log("====restaurantList====", restaurantList)
        return (
            <div className="accountPage-component">
                <div className="container accountPage-container">
                    <div className="header-container">
                        <DashBoardHeader />
                    </div>
                    <div className="row accountPage-content">
                        <div className="col-lg-4 item-content">
                            <DashboardMenu category_id = {1}/>
                        </div>
                        <div className="col-lg-8 item-content">
                            <MyAccount restaurantList={restaurantList}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyAccountPage;