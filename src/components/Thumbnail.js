import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./Thumbnail.scss";
class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
    };
  }

  selectProduct(product) {
    if (product.components) {
      this.props.history.push({
        pathname: "/menu/product",
        item:product,
        modal: true,
      });
    } else this.props.onSelectProduct(product, "add");
  }

  productDetail = (product) => {
    this.props.history.push({pathname: `/menu/product`, item: product});
  }

  render() {
    const { product } = this.props;
    return (
      <div className="thumbnail-component">
        <div className="thumbnail-container">          
          <div className="product-img-container" onClick={()=>this.productDetail(product)}>
              <img src={product.img} alt="product-img" className="product-img"/>
          </div>

          <div className="product-detail-container">
            <div className="detail-content">
              <div className="title">{product.name}</div>
              <div className="footer">
                {product.description && <div className="description">{product.description}</div>}
                <div className="price">&euro; {product.price.toFixed(2)}</div>
              </div>
            </div>

            <div
              className="btn btn-ichistation add-btn show-web"
              onClick={() => this.selectProduct(product)}
            >
              AGGIUNGI
            </div>

            <div className="show-mobile">
              <button className="plus__btn" onClick={() => this.selectProduct(product)}>
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6L1 6M7 12L7 -6.43746e-07L7 12Z"
                    stroke="#3C5896"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Thumbnail);
