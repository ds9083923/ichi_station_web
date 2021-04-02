import React, { Component } from "react";
import {
    RestaurantDetail,
    NewsLetter,
    Footer,
} from "../../components";
import $ from 'jquery';
import Helper from '../../utils/Helper';
import { getRestaurantDetail } from '../../store/actions/coreActions';

class RestaurantPage extends Component {
    constructor() {
        super();
        this.state = {
            restaurantDetail: null
        }
    }

    componentDidMount(){
        $("header").addClass("mobile-dialog");

        var restaurant_id = this.props.match.params.id;
        Helper.showSpinner();

        getRestaurantDetail(restaurant_id).then(res => {
            Helper.hideSpinner();
            console.log('get restaurant detail res: ', res);
            this.setState({restaurantDetail: res});
        })
        .catch(err => {
            Helper.hideSpinner();            
            console.log("login error:", err);
        });
    }

    render() {
        const { restaurantDetail } = this.state;
        return (
            <>
                {restaurantDetail && <div>              
                    <RestaurantDetail restaurantDetail={restaurantDetail}/>
                    <NewsLetter />
                    <Footer />
                </div>}
            </>
        )
    }
}

export default RestaurantPage;