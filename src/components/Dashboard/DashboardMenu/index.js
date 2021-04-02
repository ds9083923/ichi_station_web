import React from "react";
import "./DashboardMenu.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink, withRouter } from "react-router-dom";

const MenuList = [
    {id: 1, name: "I MIEI ORDINI", link: "/user/orders"},
    {id: 2, name: "IL MIO ACCOUNT", link: "/user/account"},
    {id: 3, name: "INDIRIZZI SALVATI", link: "/user/address"},
    {id: 4, name: "METODI DI PAGAMENTO", link: "/user/payment"},
]

class DashboardMenu extends React.Component {

    link = (link) => {
        this.props.history.push(`${link}`);
    };

    render() {
        const { category_id } = this.props;
        return (
            <div className="dashboardMenu-component">
                <div className="dashboardMenu-container">
                    <div className="main-menu">
                       {MenuList.map((item, index)=> (
                           <div className={`menu-item ${category_id === index ? "active-menu" : "inActive-menu"}`} key={index} onClick={()=>this.link(item.link)}>
                               <p>{item.name}</p>
                           </div>
                       ))}
                    </div>
                    <div className="others-menu">
                        <Link className="link" to="/terms">Termini e condizioni</Link>
                        <Link className="link" to="/privcy-policy">Informativa sulla Privacy</Link>
                        <Link className="link" to="/cookies-policy">Cookies Policy</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, {
    
})(withRouter(DashboardMenu));
