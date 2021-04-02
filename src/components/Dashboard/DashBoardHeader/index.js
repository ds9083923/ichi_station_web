import React from "react";
import "./DashBoardHeader.scss";
import {firebase} from '../../../config/firebase';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMyAccountInfo } from '../../../store/actions/coreActions';

class DashBoardHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            user_name: '',
            user_email: ''
        };
    };

    componentDidMount(){
        getMyAccountInfo().then(res => {
            this.setState({
                user_name: res.name,
                user_email: res.email
            });
        })
        .catch(err => {
            console.log("get my account error:", err);
        });
    };

    logout = () => {
        firebase.auth().signOut();
        sessionStorage.clear();
        this.props.history.push(`/`);
    };
    
    render() {
        const { user_name, user_email } = this.state;
        return (
            <div className="dashboard-header-component">
                <div className="row dashboard-header-container">
                    <div className="name-area">
                        <h3>{`Ciao ${user_name}`}</h3>
                        <p>{`Accesso effettuato come ${user_email}`}</p>
                    </div>
                    <div >
                        <button onClick={this.logout} className="btn logout-btn" type="submit">LOGOUT</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, {
    
})(withRouter(DashBoardHeader));
