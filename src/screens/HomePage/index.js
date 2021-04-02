import React, { Component } from "react";
import {
    StartArea,
    Quality,
    News,
    FoodFeel,
    FoodJourney,
    Blog,
    NewsLetter,
    Footer,
    HomeModal
} from "../../components";
import $ from 'jquery';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            isHomeModal: false
        }
    }

    componentDidMount(){
        $("header").addClass("mobile-dialog");
        $("header").addClass("unLogin");
    }

    componentWillUnmount(){
        $("header").removeClass("mobile-dialog");
        $("header").removeClass("unLogin");
    };

    closeModal() {
        this.setState({isHomeModal: false});
    }

    render() {
        return (
            <div className="home-page">                
                <StartArea />
                <Quality />
                <News />
                <FoodFeel />
                <FoodJourney />
                <Blog />
                <NewsLetter />
                <Footer />
                <HomeModal
                    isHomeModal={this.state.isHomeModal}
                    closeModal={(e) => this.closeModal(e)}
                />
            </div>
        )
    }
}

export default HomePage;