import React from "react";
import "./BlogDetail.scss";
import levelIcon from "../../../assets/images/HomePage/level-icon.png";
import blog_header_img from "../../../assets/images/BlogDetail/blog-header-img.png";
import blog_body_img from "../../../assets/images/BlogDetail/blog-body-img.png";

const BlogData = {
    blog_header_img,
    blog_body_img,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    date: "28/09/2020",
    content1: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    content2: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces.",
    content3: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
};

export default class BlogDetail extends React.Component {
    render() {
        const { blogDetail } = this.props;
        return (
            <div className="blogDetail-component">
                <div className="container blogDetail-container">
                    <div className="blog-header">
                        <img src={blogDetail.blog_header_img} alt="blog-img" className="blog-header-img"/>
                    </div>
                    <div className="blog-body">
                        <img src={levelIcon} alt="blog-img" className="level-icon"/>
                        <h2>{blogDetail.title}</h2>
                        <p>{blogDetail.date}</p>
                        <div className="blog-txt">{blogDetail.content1}</div>
                        <div className="blog-txt">{blogDetail.content2}</div>
                        <div className="blog-body-img-container">
                            <img src={blogDetail.blog_body_img} alt="blog-img" className="blog-header-img"/>
                        </div>
                        <div className="blog-txt">{blogDetail.content3}</div>
                    </div>
                </div>
            </div>
        );
    }
}
