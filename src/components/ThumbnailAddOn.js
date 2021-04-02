import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ThumbnailAddOn.scss'

class ThumbnailAddOn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
    };
  }

  handleSelectProduct(p, operation) {
    this.props.onSelectProduct(p, operation);
  }

  render() {
    const { product } = this.props;
    console.log("product===", product)
    return (
      <div className={`thumbnail ${product.img? "thumbnail-addon" : ""}`}>
        <div
          className={`Thumbnail ${
            product.number > 0 ? "added" : ""
          } `}
        >
          {product.img ? (
            <div
              className="imgContainer "
              onClick={() => {
                this.handleSelectProduct(product, "add");
              }}
            >
              <img src={product.img}  alt="fg" />
            </div>
          ) : (
            <div className="checkbox">
              {product.number > 0 ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="11.5" stroke="#3C5896" />
                  <circle cx="12" cy="12" r="8" fill="#3C5896" />
                </svg>
              ) : (
                <svg
                  onClick={() => {
                    this.handleSelectProduct(product, "add");
                  }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="11.5" stroke="#BDBDBD" />
                </svg>
              )}
            </div>
          )}
          <div className="footer">
              <div className="float-left">
              <div className="title" style={{ fontSize: "15px" }}>
            {product.name}
          </div>
          {product.price && (
              <div className="price">&euro; {product.price}</div>
            )}
              </div>
            <div className="add float-right">
              <div
                className="remove"
                onClick={() => {
                  this.handleSelectProduct(product, "del1");
                }}
              >
                <svg
                  width="14"
                  height="2"
                  viewBox="0 0 14 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L1 0.999999"
                    stroke="#3C5896"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <input
                type="number"
                size="3"
                onChange={() => {}}
                className="number-prod"
                value={product.number || 0}
              />
              <div
                className="remove"
                onClick={() => {
                  this.handleSelectProduct(product, "add");
                }}
              >
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
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
         
          </div>
          
          
        </div>
      </div>
    );
  }
}

export default ThumbnailAddOn;
