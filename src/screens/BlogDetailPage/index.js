import React, { Component } from "react";
import {
    BlogDetail,
    NewsLetter,
    Footer,
} from "../../components";
import $ from 'jquery';
import { geBlogDetail } from '../../store/actions/coreActions';
import Helper from '../../utils/Helper';

class BlogDetailPage extends Component {
    constructor() {
        super();
        this.state = {
            blogDetail: null
        }
    }

    componentDidMount(){
        $("header").addClass("mobile-dialog");
        $("header").addClass("unLogin");

        var blog_id = this.props.match.params.id;

        Helper.showSpinner();

        geBlogDetail(blog_id).then(res => {
            Helper.hideSpinner();
            console.log('get blog detail res: ', res);
            this.setState({blogDetail: res});    
        })
        .catch(err => {
            Helper.hideSpinner();            
            console.log("login error:", err);
        });
    }

    render() {
        const { blogDetail } = this.state;
        return (
            <>
                {blogDetail && <div className="blogDetail-page">                
                    <BlogDetail blogDetail={blogDetail}/>
                    <NewsLetter />
                    <Footer />
                </div>}
            </>
        )
    }
}

export default BlogDetailPage;