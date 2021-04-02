import {firebase} from '../../config/firebase';

function signUpUser(userDetails) {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(userDetails.email, userDetails.password)
            .then( res => {
                console.log("signup res", res);
                var user_uid = res.user.uid;
                var userData = {
                    userId: user_uid,
                    name: userDetails.name,
                    gender: userDetails.gender,
                    phone: userDetails.phone,
                    email: userDetails.email,
                    password: userDetails.password,
                };
                sessionStorage.setItem("user_uid", user_uid);
                sessionStorage.setItem("user_email", userDetails.email);

                firebase
                    .firestore()
                    .collection("users")
                    .doc(user_uid)
                    .set(userData);
                firebase
                    .firestore()
                    .collection("users")
                    .doc(user_uid)
                    .get()
                    .then(function(user) {
                        console.log("signup user response", user.data());
                        resolve(user);
                    })
                    .catch(function(error) {
                        const { code, message } = error;
                        reject(message);
                    });
                
            }).catch((error) => {
                var errorMessage = error.message;
                reject(errorMessage);
                console.log('Error in Signing up;', errorMessage);
            });
    });
};

function loginUser(userDetails) {
    console.log(userDetails);
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(userDetails.email, userDetails.password)
            .then(res => {               
                
                var user_uid = res.user.uid;
                sessionStorage.setItem("user_uid", user_uid);
                
                firebase
                    .firestore()
                    .collection("users")
                    .doc(user_uid)
                    .get()
                    .then(function(user) {            
                        if (user.exists) {
                            sessionStorage.setItem("user_email", user.data().email);
                            resolve(user.data());
                        } else {
                            reject("user doen't exist");
                        }
                
                    }).catch((error) => {
                        var errorMessage = error.message;
                        reject(errorMessage);
                        console.log('Error in Signing in;', errorMessage);
                    });

            }).catch((error) => {
                var errorMessage = error.message;
                reject(errorMessage);
                console.log('Error in Signing in', errorMessage);
            });
    });
};

function forgotPass(email) {    
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(res => {  
                resolve("success forgot pass")
            }).catch((error) => {
                var errorMessage = error.message;
                reject(errorMessage);
                console.log('Error in forgot Pass', errorMessage);
            });
    });
};



export {
    signUpUser,
    loginUser,
    forgotPass
};