import React, {Component} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader'
import { css } from "@emotion/core";
import 'react-notifications/lib/notifications.css';
import { createBrowserHistory } from 'history';
import { NotificationContainer } from 'react-notifications';
import { EventEmitter } from '../utils/events';
import Helper from '../utils/Helper';
import {
    BlogPage,
    BlogDetailPage,
    RestaurantPage,
} from "../screens";

import { 
    Header,
    Sidebar,
    RestaurantModal
} from "../components";
import DashboardRoutes from './DashboardRoutes';
import LandingRoutes from './LandingRoutes';
import { getRestaurants } from '../store/actions/coreActions';

const customHistory = createBrowserHistory();

const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// const CustomeRoutes = () => (
export default class CustomeRoutes extends Component {
    constructor() {
        super();
        this.state = {
            isSidebar: false,
            loading: false,
            isRestaurantModal: false,
            restaurantList: null
        };
    };

    componentDidMount(){
        Helper.showSpinner();

        getRestaurants().then(res => {
            Helper.hideSpinner();            
            this.setState({restaurantList: res})     
        })
        .catch(err => {
            Helper.hideSpinner();            
            console.log("login error:", err);
        });
    };

    toggleSidebar = (value) => {
        this.setState({isSidebar: value});
    };

    toggleRestaurantModal = (value) => {
        this.setState({isRestaurantModal: value});
    };

    render() {
        const { isSidebar, loading, isRestaurantModal, restaurantList } = this.state;
        EventEmitter.subscribe('isLoading', (event) => this.setState({loading: event}));
        // console.log(this.props.path)
        return (
            <Router history={customHistory}>
                <div>
                    <Sidebar isSidebar={isSidebar} toggleSidebar={(e) => this.toggleSidebar(e)} restaurantModal={(e) => this.toggleRestaurantModal(e)}/>
                    <Header currentLocation={this.props.path} toggleSidebar={(e) => this.toggleSidebar(e)} restaurantModal={(e) => this.toggleRestaurantModal(e)}/>
                    <Route path="/">
                        <LandingRoutes />
                    </Route>

                    <Route exact path="/restaurant/:id" component={RestaurantPage} />
                    <Route exact path="/blog" component={BlogPage} />
                    <Route exact path="/blog/:id" component={BlogDetailPage} />

                    <Route path="/user">
                        <DashboardRoutes restaurantList={restaurantList}/>
                    </Route>
                </div>
                <NotificationContainer/>
                <div className={loading ? "overlay-loader" : "d-none"}>
                    <FadeLoader
                        css={override}
                        size={150}
                        color={"#3C5896"}
                        loading={loading}
                    />
                </div>
                {restaurantList && <RestaurantModal
                    isRestaurantModal={isRestaurantModal}
                    toggleRestaurantModal={(e) => this.toggleRestaurantModal(e)}
                    restaurantList={restaurantList}
                />}
            </Router>
        )
    }
}