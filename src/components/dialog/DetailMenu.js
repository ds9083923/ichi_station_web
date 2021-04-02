import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';
 
 

export default class DetailMenu extends Component {
    constructor() {
        super();
        this.state = {

        }

        this.search = this.search.bind(this);
    }
    componentDidMount(){
 
        $("body").addClass("modal-open");
        $("header").addClass("dialog");
         
    } 
    
    componentWillUnmount(){
        $("body").removeClass("modal-open");
        $("header").removeClass("dialog");
    }
    search() {

    }

    render() {
        
        return <div className="dialog-content"><div className="content">Content Menu altre voci menu</div></div>;
    }
} 