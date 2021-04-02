import React from "react";
import "./SelectBox.scss";
import dropDonw_icon from "../../assets/images/drop-down-icon.png";

export default class SelectBox extends React.Component {
  state = {
    value : '',
    showMenu: false
  };

  selectItem = (item) => {
    this.setState({
      value: item.name,
      showMenu: false,
    });
    this.props.onChange(item)
  };

  render() {    
    const { className, options } = this.props;
    const { value, showMenu } = this.state;
    return (
      <div className="selectbox-component">
        <div className={`input-container ${className}`} onClick={()=> this.setState({showMenu: !showMenu})}>
          <div>{value}</div>
          <img src={dropDonw_icon} alt="drop-down-icon" className="drop-down-icon" />
        </div>
        {showMenu &&
          <div className="drop-down-container">
            {options.map((item, index)=> (
              <div key={index} className="item" onClick={()=>this.selectItem(item)}>
                 {item.name} 
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}
