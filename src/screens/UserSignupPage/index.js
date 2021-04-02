import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./UserSignupPage.scss";
import { signUpUser } from '../../store/actions/authActions';
import $ from 'jquery';
import Helper from '../../utils/Helper';

export default class UserSignupPage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            gender: '',
            phone: '',
            email: '',
            password: '',

            isName: true,
            isGender: true,
            isPhone: true,
            isEmail: true,
            isPassword: true,
        };
    };

    componentDidMount(){
        $("header").addClass("dialog").addClass("login-register");
    };


    componentWillUnmount(){
        $("header").removeClass("dialog").removeClass("login-register");
    };

    userSignup = async () => {
        const { name, gender, phone, email, password, isName, isGender, isPhone, isEmail, isPassword } = this.state;

        //full name validation
        if (name.length === 0) {
            this.setState({ isName: false });
        } else {
            this.setState({ isName: true });
        }

        //gender validation
        if (gender === '') {
            this.setState({ isGender: false });
        } else {
            this.setState({ isGender: true });
        };

        //phone validation
        if (phone === '') {
            this.setState({ isPhone: false });
        } else {
            this.setState({ isPhone: true });
        }

        // email validation
        const emailREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailResult = emailREGEX.test(email);

        if (emailResult === false) {
            this.setState({ isEmail: false });
        } else {
            this.setState({ isEmail: true });
        };        

        //password validation
        const passwordREGEX = new RegExp("^(?=.*[0-9])(?=.{6,})");
        const passwordResult = passwordREGEX.test(password);

        if (passwordResult === false) {
            this.setState({ isPassword: false });
        } else {
            this.setState({ isPassword: true });
        }
        
        let userDetails = {
            name,
            gender,
            phone,
            email,
            password,
        };
        
        if(name && gender && phone && emailResult && passwordResult){
            Helper.showSpinner();
            signUpUser(userDetails).then(res => {
                Helper.hideSpinner();
                Helper.showToast('success', 3000, "Successfully Signup!");                
                this.props.history.push('/user/menu');
            })
            .catch(err => {
                Helper.hideSpinner();
                Helper.showToast('error', 3000, err);
                console.log("signup error:", err);
            });
        };
    };
    
    render() {
        const { name, gender, phone, email, password, isName, isGender, isPhone, isEmail, isPassword } = this.state;
        return (
            <div className="user-signup-component">
                <div className="user-signup-container">
                    <div className="row main-row">
                        <div className="col-lg-4 left-area">
                            <div className="signup-area">
                                <h6>REGISTRATI</h6>
                                <input
                                    type="text" 
                                    className="form-control"
                                    placeholder="Nome"
                                    value={name}
                                    onChange={(e) => { this.setState({ name: e.target.value }) }} 
                                />
                                {!isName && <div className="formError">Enter your Full name</div>}

                                <input
                                    type="text" 
                                    className="form-control"
                                    placeholder="Cognome"
                                    value={gender}
                                    onChange={(e) => { this.setState({ gender: e.target.value }) }} 
                                />
                                {!isGender && <div className="formError">Enter your gender</div>}

                                <input
                                    type="number" 
                                    className="form-control"
                                    placeholder="Numero di telefono"
                                    value={phone}
                                    onChange={(e) => { this.setState({ phone: e.target.value }) }} 
                                />
                                {!isPhone && <div className="formError">Enter your phone</div>}
                                
                                <input
                                    type="email" 
                                    className="form-control"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => { this.setState({ email: e.target.value }) }} 
                                />
                                {!isEmail && <div className="formError">Invalid email</div>}

                                <input
                                    type="password"
                                    className="form-control" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => { this.setState({ password: e.target.value }) }} 
                                />
                                {!isPassword && <div className="formError">Password should contain minimum 6 characters and at least a number</div>}

                                <div className="password-validation-txt" onClick ={()=>this.forgotPass()}>Crea una password difficile da indovinare. Deve contenere almeno 8 caratteri</div>
                                <button onClick={this.userSignup} className="btn btn-sbumit mt-5" type="submit">registrati</button>
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
