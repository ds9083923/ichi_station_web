import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./UserLoginPage.scss";
import { loginUser, forgotPass } from '../../store/actions/authActions';
import $ from 'jquery';
import facebook_icon from "../../assets/images/HomePage/facebook-icon.png";
import Helper from '../../utils/Helper';

export default class UserLoginPage extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: true,
            email: '',
            password: '',

            isEmail: true,
            isPassword: true
        };
    };

    componentDidMount(){
        $("header").addClass("dialog").addClass("login-register");
    };

    componentWillUnmount(){
        $("header").removeClass("dialog").removeClass("login-register");
    };
    
    forgotPass = () => {
        const { email } = this.state;
        if(email){
            Helper.showSpinner();

            forgotPass(email).then(res => {
                Helper.hideSpinner();
                console.log('return forgot pass res: ', res);
                Helper.showToast('success', 3000, "We have sent forgot password Link to your mail! Please Check your mail");
            })
            .catch(err => {
                Helper.hideSpinner();
                Helper.showToast('error', 3000, err);
                console.log("forgot pass error:", err);
            });
        } else {
            Helper.showToast('error', 3000, "Need Email!");
        };
    };
    
    userSignup = () => {
        this.props.history.push('/UserSignup');
    };
    
    userLogin = async () => {
        const { email, password } = this.state;

        if (!email) {
            this.setState({ isEmail: false });
        } else {
            this.setState({ isEmail: true });
        };

        if (!password) {
            this.setState({ isPassword: false });
        } else {
            this.setState({ isPassword: true });
        };

        if(email && password) {
            Helper.showSpinner();
            loginUser({ email, password }).then(res => {
                Helper.hideSpinner();
                console.log('return login res: ', res)
                this.props.history.push('/user/menu');
            })
            .catch(err => {
                Helper.hideSpinner();
                Helper.showToast('error', 3000, err);
                console.log("login error:", err);
            });
        };
    };
    
    render() {        
        const { isEmail, isPassword } = this.state;
        return (
            <div className="user-login-component">
                <div className="user-login-container">
                    <div className="row main-row">
                        <div className="col-lg-4 left-area">
                            <div className="login-area">
                                <h6>Login</h6>                                
                                <input 
                                    type="email" 
                                    className={`form-control ${isEmail? "" : "error-input"}`}
                                    placeholder="Il mio indirizzo e-mail" 
                                    onChange={(e) => { this.setState({ email: e.target.value }) }} 
                                />
                                <input 
                                    type="password"
                                    className={`form-control ${isPassword? "" : "error-input"}`}
                                    placeholder="Password" 
                                    onChange={(e) => { this.setState({ password: e.target.value }) }} 
                                />
                                <div className="forgot-pass" onClick ={()=>this.forgotPass()}>Password dimenticata?</div>
                                <button onClick={this.userLogin} className="btn btn-sbumit mt-5" type="submit">Login</button>
                                <button 
                                    onClick={this.userLogin} 
                                    className="btn btn-facebook-signup" type="submit">
                                    <img src={facebook_icon} alt="facebook-icon" className="facebook-icon"/>
                                    <div className="facebook-signup-txt">accedi con facebook</div>
                                </button>
                            </div>
                            <div className="create-account-area">
                                <div className="not-register-txt">Non sei registrato?</div>
                                <button onClick={this.userSignup} className="btn btn-sbumit-noFill" type="submit">crea un account</button>
                            </div>
                        </div>
                        <div className="col-lg-8 right-area">
                            <div className="right-area-bg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}