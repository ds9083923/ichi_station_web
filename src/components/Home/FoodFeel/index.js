import React from "react";
import "./FoodFeel.scss";
import levelIcon from "../../../assets/images/HomePage/level-icon.png";

export default class FoodFeel extends React.Component {
  render() {
    return (
      <div className="foodFeel-component">
        <div className="container foodFeel-container text-center">
          <img src={levelIcon} alt="level-icon" />
          Un viaggio di sapori. <br/>
          Scatole che contengono ricordi, <br/>
          esperienze ed emozioni. <br/>
        </div>
      </div>
    );
  }
}
