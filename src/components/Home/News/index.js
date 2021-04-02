import React from "react";
import "./News.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import levelIcon from "../../../assets/images/HomePage/level-icon.png";
import news_img_1 from "../../../assets/images/HomePage/news-img-1.png";
import previous_icon from "../../../assets/images/HomePage/left-arrow-icon.png";
import next_icon from "../../../assets/images/HomePage/right-arrow-icon.png";

const NewsData = [
    {id: 1, title: "Happy sushi box", date: "lunedì", price: "€ 25,00", picture: news_img_1},
    {id: 2, title: "Happy sushi box", date: "lunedì", price: "€ 25,00", picture: news_img_1},
    {id: 3, title: "Happy sushi box", date: "lunedì", price: "€ 25,00", picture: news_img_1},
];

export default class News extends React.Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    return (
      <div className="news-component">
        <div className="container news-container">
            <div className="news-header">
                <h2>Le novità della settimana</h2>
            </div>
            <div className="main-row">
              <Slider
                dots= {true}
                infinite= {false}
                speed= {500}
                slidesToShow= {1}
                slidesToScroll= {1}
                arrows= {false}
                ref={c => (this.slider = c)}>
                {NewsData.map((item, index)=> (
                  <div className="row news-item" key={index}>
                    <div className="col-lg-6 left-area">
                      <img src={levelIcon} alt="level-icon" className="level-icon"/>
                      <div className="title">{item.title}</div>
                      <div className="title">{item.date}</div>
                      <div className="way">solo take away</div>
                      <div className="price">{item.price}</div>
                      <div className="order-btn">ORDINA</div>
                    </div>
                    <div className="col-lg-6 right-area">
                      {/* <img src={item.picture} alt="news-img" className="news-img"/> */}
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="slider-control">
                <div className="previous-icon" onClick={this.previous}>
                  <img src={previous_icon} alt="previous-icon" />
                </div>
                <div className="next-icon" onClick={this.next}>
                  <img src={next_icon} alt="next-icon"/>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
