import React, { Component } from "react";
import {
    BlogList,
    NewsLetter,
    Footer,
} from "../../components";
import $ from 'jquery';
import Helper from '../../utils/Helper';
import { getBlogs } from '../../store/actions/coreActions';

class BlogPage extends Component {
    constructor() {
        super();
        this.state = {
            isHomeModal: false,
            blogsList: ''
        }
    }

    componentDidMount(){
        $("header").addClass("mobile-dialog");
        $("header").addClass("unLogin");

        Helper.showSpinner();

        getBlogs().then(res => {
            Helper.hideSpinner();
            console.log('get blog list res: ', res);
            this.setState({blogsList: res})     
        })
        .catch(err => {
            Helper.hideSpinner();            
            console.log("login error:", err);
        });
    };

    render() {
        const { blogsList } = this.state;
        return (
            <>
                {blogsList && <div className="blog-page">          
                    <BlogList blogsList={blogsList}/>
                    <NewsLetter/>
                    <Footer />
                </div>}
            </>
        )
    }
}

export default BlogPage;