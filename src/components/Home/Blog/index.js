import React from "react";
import "./Blog.scss";
import levelIcon from "../../../assets/images/HomePage/level-icon.png";
import plus_icon from "../../../assets/images/HomePage/plus-icon.png";
import blog_img_1 from "../../../assets/images/HomePage/blog-img-1.png";
import blog_img_2 from "../../../assets/images/HomePage/blog-img-2.png";
import blog_img_3 from "../../../assets/images/HomePage/blog-img-3.png";

const BlogList = [
    {id: 1, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_1},
    {id: 2, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_2},
    {id: 3, date: "28/09/2020", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident", picture: blog_img_3},
]

export default class Blog extends React.Component {
    render() {
        return (
            <div className="blog-component">
                <div className="container blog-container">
                    <div className="blog-header">
                        <img src={levelIcon} alt="level-icon" className="level-icon"/>
                        <h2>Dal nostro blog</h2>
                    </div>
                    <div className="row main-row">
                        {BlogList.map((item, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="blog-item">
                                    <div className="blog-img-container">
                                        <img src={item.picture} alt="blog-img" className="blog-img"/>
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
