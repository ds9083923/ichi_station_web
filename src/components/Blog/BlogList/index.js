import React from "react";
import "./BlogList.scss";
import levelIcon from "../../../assets/images/HomePage/level-icon.png";
import plus_icon from "../../../assets/images/HomePage/plus-icon.png";
import blog_img_1 from "../../../assets/images/HomePage/blog-img-1.png";
import blog_img_2 from "../../../assets/images/HomePage/blog-img-2.png";
import blog_img_3 from "../../../assets/images/HomePage/blog-img-3.png";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

const BlogListData = [
    {id: 1, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_1},
    {id: 2, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_2},
    {id: 3, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_3},
    {id: 4, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_1},
    {id: 5, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_2},
    {id: 6, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_3},
    {id: 7, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_1},
    {id: 8, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_2},
    {id: 9, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_3},
]

class BlogList extends React.Component {

    BlogDetail = (id) => {       
        this.props.history.push(`/blog/${id}`);
    };

    render() {
        const { blogsList } = this.props;
        return (
            <div className="blogList-component">
                <div className="container blogList-container">
                    <div className="blogList-header">
                        <img src={levelIcon} alt="level-icon" className="level-icon"/>
                        <h2>Dal nostro blog</h2>
                    </div>
                    <div className="row main-row">
                        {blogsList.map((item, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="blog-item" onClick={()=>this.BlogDetail(item.id)}>
                                    <div className="blog-img-container">
                                        <img src={item.blog_header_img} alt="blog-img" className="blog-img"/>
                                    </div>
                                    <div className="blog-description-container">
                                        <div className="date">{item.date}</div>
                                        <div className="title">{item.title}</div>
                                        <div className="description">{item.description}</div>
                                        <div className="subscribe-btn">
                                            <img src={plus_icon} alt="plus-icon" className="plus-icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, {
    
})(withRouter(BlogList));
